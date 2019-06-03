import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
    selector: 'app-registrar-empresa',
    templateUrl: './registrar-empresa.component.html',
    styleUrls: ['./registrar-empresa.component.scss']
})
export class RegistrarEmpresaComponent implements OnInit {

    // Empresa a registrar
    public empresa: Empresa = {} as Empresa;

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<RegistrarEmpresaComponent>,
        private snackBar: MatSnackBar,
        private empresaService: EmpresaService
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
            this.empresaService.save(this.empresa).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('La empresa ha sido registrada', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar la empresa', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
