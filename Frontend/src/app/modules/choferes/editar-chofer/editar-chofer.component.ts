import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UsuarioChofer } from 'src/app/models/usuario-chofer';
import { Empresa } from 'src/app/models/empresa';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { UsuarioChoferService } from 'src/app/services/usuario-chofer.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
    selector: 'app-editar-chofer',
    templateUrl: './editar-chofer.component.html',
    styleUrls: ['./editar-chofer.component.scss']
})
export class EditarChoferComponent implements OnInit {

    // Chofer que se desea editar
    public chofer: UsuarioChofer;

    // Empresas disponibles
    public empresas: Empresa[];

    // Indicar si se encuentra registrando
    public registrando = false;

    // Formulario
    @ViewChild('form')
    public form: NgForm;

    public constructor(
        private dialogRef: MatDialogRef<EditarChoferComponent>,
        private usuarioChoferService: UsuarioChoferService,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private empresaService: EmpresaService,
        private snackBar: MatSnackBar,
    ) { }

    public ngOnInit() {
        // Obtener la maquina sin los datos observables
        this.usuarioChoferService.get(this.data._links.self.href).subscribe(
            chofer => {
                // Obtener empresa
                const obsEmpresa: Observable<Empresa> = this.empresaService.get(chofer._links.empresa.href);

                forkJoin(obsEmpresa).subscribe(
                    (Response: [Empresa]) => {
                        // Asignar empresa
                        chofer.empresa = Response[0]._links.self.href;

                        // Asignar maquina
                        this.chofer = chofer;
                    }
                );
            }
        );

        // Obtener empresas
        this.empresaService.queryPrincipal().subscribe(
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
            this.usuarioChoferService.update(this.chofer).subscribe(
                Respose => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro exitoso
                    this.snackBar.open('El chofer ha sido Editado', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                },
                Error => {
                    // Indicar que no se encuentra registrando
                    this.registrando = false;

                    // Notificar registro erroneo
                    this.snackBar.open('No se ha podido Editar el chofer', 'Aceptar', { duration: 2000 });

                    // Cerrar modal
                    this.dialogRef.close();
                }
            );
        }
    }

}
