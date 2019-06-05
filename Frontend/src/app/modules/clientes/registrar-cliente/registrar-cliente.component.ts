import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
    selector: 'app-registrar-cliente',
    templateUrl: './registrar-cliente.component.html',
    styleUrls: ['./registrar-cliente.component.scss']
})
export class RegistrarClienteComponent implements OnInit {

    // Cliente a registrar
    public cliente: Cliente = {} as Cliente;

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<RegistrarClienteComponent>,
        private snackBar: MatSnackBar,
        private clienteService: ClienteService
    ) {

    }

    public ngOnInit() {

    }

    public onSubmit(): void {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Registrar
            this.clienteService.save(this.cliente).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El cliente ha sido registrado', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar el cliente', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
