import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { HoraTrabajadaService } from 'src/app/services/hora-trabajada.service';
import { HoraTrabajada } from 'src/app/models/hora-trabajada';
import { Arriendo } from 'src/app/models/arriendo';

@Component({
    selector: 'app-registrar-hora-trabajada',
    templateUrl: './registrar-hora-trabajada.component.html',
    styleUrls: ['./registrar-hora-trabajada.component.scss'],
})
export class RegistrarHoraTrabajadaComponent implements OnInit {

    // Hora trabajada a registrar
    public horaTrabajada: HoraTrabajada = {} as HoraTrabajada;

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private horaTrabajadaService: HoraTrabajadaService,
        private dialogRef: MatDialogRef<RegistrarHoraTrabajadaComponent>,
        private snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) private arriendo: Arriendo,
    ) {
        
    }

    public ngOnInit() {
        // Asignar arriendo a hora trabajada
        this.horaTrabajada.arriendo = this.arriendo._links.self.href
    }

    public onSubmit() {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Registrar
            this.horaTrabajadaService.save(this.horaTrabajada).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('La hora trabajada ha sido ingresada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido ingresar la hora trabajada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
