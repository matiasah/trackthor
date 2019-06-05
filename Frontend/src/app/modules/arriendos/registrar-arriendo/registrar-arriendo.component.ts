import { Component, OnInit, ViewChild } from '@angular/core';
import { Arriendo } from 'src/app/models/arriendo';
import { Maquina } from 'src/app/models/maquina';
import { Cliente } from 'src/app/models/cliente';
import { NgForm } from '@angular/forms';
import { ArriendoService } from 'src/app/services/arriendo.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { MaquinaService } from 'src/app/services/maquina.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-registrar-arriendo',
    templateUrl: './registrar-arriendo.component.html',
    styleUrls: ['./registrar-arriendo.component.scss']
})
export class RegistrarArriendoComponent implements OnInit {

    // Arriendo a registrar
    public arriendo: Arriendo = {} as Arriendo;

    // Máquinas
    public maquinas: Maquina[];

    // Clientes
    public clientes: Cliente[] = [];

    // Indicar si se encuentra registrando
    public registrando = false;

    // Tabla hash
    private clientesMap: { [index: string]: Cliente };

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private arriendoService: ArriendoService,
        private dialogRef: MatDialogRef<RegistrarArriendoComponent>,
        private snackBar: MatSnackBar,
        private maquinaService: MaquinaService,
        private clienteService: ClienteService
    ) {

    }

    public ngOnInit() {
        // Obtener máquinas
        this.maquinaService.query().subscribe(
            Response => {
                this.maquinas = Response;
            }
        );
    }

    @ViewChild('clienteForm')
    public set clienteForm(form: NgForm) {
        // Si se ha recibido el input
        if (form != null) {
            // Obtener objeto observable
            const observable: Observable<any> | null = form.valueChanges;

            // Si hay un objeto observable
            if (observable != null) {

                // Al cambiar contenido del autocomplete
                observable
                    // Esperar 500ms para cualquier otro cambio
                    .pipe(debounceTime(500))
                    // Suscribirse a valor de autocomplete
                    .subscribe(
                        Value => {

                            // Si el valor no está en la tabla hash, es porque probablemente no es un URL
                            if (this.clientesMap[Value] === null) {

                                // Buscar clientes con nombres que contengan la palabra
                                this.clienteService.queryFirst10ByNombresContaining(Value).subscribe(
                                    Response => {
                                        // Almacenar lista de clientes en componente
                                        this.clientes = Response;

                                        // Limpiar tabla hash
                                        this.clientesMap = {};

                                        // Por cada cliente
                                        for (const cliente of this.clientes) {
                                            // Hashear cliente
                                            this.clientesMap[cliente._links.self.href] = cliente;
                                        }
                                    }
                                );

                            }
                        }
                    );
            }
        }

    }

    public onSubmit(): void {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Registrar
            this.arriendoService.save(this.arriendo).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El arriendo ha sido registrado', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar el arriendo', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

    public getNombresCliente(url: string): string | null {
        // Si hay una tabla de clientes
        if (this.clientesMap != null) {

            // Obtener cliente
            const cliente: Cliente = this.clientesMap[url];

            // Si hay un cliente con nombres
            if (cliente != null && cliente.nombres ) {
                return cliente.nombres;
            }
        }
        return null;
    }

}
