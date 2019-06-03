import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { TipoMaquinaService } from 'src/app/services/tipo-maquina.service';
import { TipoMaquina } from 'src/app/models/tipo-maquina';

@Component({
    selector: 'app-registrar-tipo-maquina',
    templateUrl: './registrar-tipo-maquina.component.html',
    styleUrls: ['./registrar-tipo-maquina.component.scss']
})
export class RegistrarTipoMaquinaComponent implements OnInit {

    // Máquina a registrar
    public tipoMaquina: TipoMaquina = {} as TipoMaquina;

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<RegistrarTipoMaquinaComponent>,
        private snackBar: MatSnackBar,
        private tipoMaquinaService: TipoMaquinaService
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
            this.tipoMaquinaService.save(this.tipoMaquina).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El tipo de máquina ha sido registrada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar el tipo de máquina', 'Aceptar', {duration: 2000});

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
