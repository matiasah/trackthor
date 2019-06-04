import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
    selector: 'app-editar-cliente',
    templateUrl: './editar-cliente.component.html',
    styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

    // Cliente que se desea editar
    public cliente: Cliente;

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<EditarClienteComponent>,
        private clienteService: ClienteService,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private snackBar: MatSnackBar,
    ) {
        
    }

    public ngOnInit() {
        // Obtener la maquina sin los datos observables
        this.clienteService.get(this.data._links.self.href).subscribe(
            cliente => {
                this.cliente = cliente;
            }
        );
    }

    public onSubmit(): void {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Registrar
            this.clienteService.update(this.cliente).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El cliente ha sido editado', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido editar el cliente', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
