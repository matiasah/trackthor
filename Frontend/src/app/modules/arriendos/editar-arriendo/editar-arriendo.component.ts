import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ArriendoService } from 'src/app/services/arriendo.service';
import { Arriendo } from 'src/app/models/arriendo';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
    selector: 'app-editar-arriendo',
    templateUrl: './editar-arriendo.component.html',
    styleUrls: ['./editar-arriendo.component.scss']
})
export class EditarArriendoComponent implements OnInit {

    // Arriendo que se desea editar
    public arriendo: Arriendo;

    // Máquinas disponibles
    public maquinas: Maquina[];

    // Clientes disponibles
    public clientes: Cliente[];

    // Indicar si se encuentra registrando
    public registrando = false;

    // Tabla hash
    private clientesMap: { [index: string]: Cliente } = {};

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<EditarArriendoComponent>,
        private maquinaService: MaquinaService,
        private clienteService: ClienteService,
        private arriendoService: ArriendoService,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private snackBar: MatSnackBar,
    ) {

    }

    public ngOnInit() {

        // Obtener la maquina sin los datos observables
        this.arriendoService.get(this.data._links.self.href).subscribe(
            arriendo => {
                // Obtener cliente
                const obsCliente: Observable<Cliente> = this.clienteService.get(arriendo._links.cliente.href);

                // Obtener máquina
                const obsMaquina: Observable<Maquina> = this.maquinaService.get(arriendo._links.maquina.href);

                forkJoin(obsCliente, obsMaquina).subscribe(
                    (Response: [Cliente, Maquina]) => {
                        // Agregar cliente a tabla hash
                        this.clientesMap[Response[0]._links.self.href] = Response[0];

                        // Asignar cliente
                        arriendo.cliente = Response[0]._links.self.href;

                        // Asignar máquina
                        arriendo.maquina = Response[1]._links.self.href;

                        // Asignar arriendo
                        this.arriendo = arriendo;
                    }
                );
            }
        );

        // Obtener tipos de máquina
        this.maquinaService.query().subscribe(
            Response => {
                this.maquinas = Response;
            }
        );

        // Obtener empresas
        this.clienteService.query().subscribe(
            Response => {
                this.clientes = Response;
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
                            if (!this.clientesMap[Value]) {

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
            this.arriendoService.update(this.arriendo).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El arriendo ha sido Editado', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido Editar el arriendo', 'Aceptar', { duration: 2000 });

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
            if (cliente != null && cliente.nombres) {
                return cliente.nombres;
            }
        }
        return null;
    }

}
