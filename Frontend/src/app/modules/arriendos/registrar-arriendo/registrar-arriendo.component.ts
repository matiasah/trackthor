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
            let observable: Observable<any> | null = form.valueChanges;

            // Si hay un objeto observable
            if (observable != null) {

                // Al cambiar contenido del autocomplete
                observable
                    // Esperar 500ms para cualquier otro cambio
                    .pipe(debounceTime(500))
                    // Suscribirse a valor de autocomplete
                    .subscribe(
                        Value => {

                            // Si el nombre del cliente es nulo, el valor no es un link
                            if (this.getNombresCliente(Value) === null) {

                                // Si el valor es un string, buscar clientes con nombres similares
                                this.clienteService.queryFirst10ByNombresContaining(Value).subscribe(
                                    Response => {
                                        this.clientes = Response;
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
        // Si se ha recibido la lista de clientes
        if (this.clientes != null) {

            // Por cada cliente
            for (let i = 0; i < this.clientes.length; i++) {
                // Objeto del cliente
                let cliente: Cliente = this.clientes[i];

                // Si coincide el URL
                if (cliente._links.self.href == url && cliente.nombres) {

                    // Retornar nombre del cliente
                    return cliente.nombres;
                }
            }
        }
        return null;
    }

}
