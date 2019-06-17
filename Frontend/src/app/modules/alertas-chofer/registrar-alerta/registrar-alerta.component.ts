import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Alerta } from 'src/app/models/alerta';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
    selector: 'app-registrar-alerta',
    templateUrl: './registrar-alerta.component.html',
    styleUrls: ['./registrar-alerta.component.scss'],
})
export class RegistrarAlertaComponent implements OnInit {

    // Alerta a registrar
    public alerta: Alerta = {} as Alerta;

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private alertaService: AlertaService,
        private dialogRef: MatDialogRef<RegistrarAlertaComponent>,
        private snackBar: MatSnackBar,
    ) {

    }

    public ngOnInit() {

    }

    public onSubmit() {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Registrar
            this.alertaService.save(this.alerta).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('La alerta ha sido registrada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar la alerta', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
