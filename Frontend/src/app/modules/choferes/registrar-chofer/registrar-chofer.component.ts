import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { UsuarioChoferService } from 'src/app/services/usuario-chofer.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { EmpresaService } from 'src/app/services/empresa.service';
import { UsuarioChofer } from 'src/app/models/usuario-chofer';

@Component({
    selector: 'app-registrar-chofer',
    templateUrl: './registrar-chofer.component.html',
    styleUrls: ['./registrar-chofer.component.scss']
})
export class RegistrarChoferComponent implements OnInit {

    // Chofer que se desea registrar
    public chofer: UsuarioChofer = {} as UsuarioChofer;

    // Empresas
    public empresas: Empresa[];

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<RegistrarChoferComponent>,
        private snackBar: MatSnackBar,
        private usuarioChoferService: UsuarioChoferService,
        private empresaService: EmpresaService
    ) {

    }

    public ngOnInit() {
        // Obtener empresas
        this.empresaService.query().subscribe(
            Response => {
                this.empresas = Response;
            }
        );
    }

    public onSubmit(): void {
        // Si el formulario es válido
        if (this.form.valid) {
            // Indicar que se encuentra registrando
            this.registrando = true;

            // Registrar
            this.usuarioChoferService.save(this.chofer).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El chofer ha sido registrado', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido registrar al chofer', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }


}
