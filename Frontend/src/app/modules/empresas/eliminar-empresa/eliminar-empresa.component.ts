import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
    selector: 'app-eliminar-empresa',
    templateUrl: './eliminar-empresa.component.html',
    styleUrls: ['./eliminar-empresa.component.scss']
})
export class EliminarEmpresaComponent implements OnInit {

    // Indicar que se encuentra eliminando
    public eliminando = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarEmpresaComponent>,
        private empresaService: EmpresaService,
        @Inject(MAT_DIALOG_DATA) public empresa: Empresa,
        private snackBar: MatSnackBar
    ) {

    }

    public ngOnInit() {

    }

    public eliminar() {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.empresaService.delete(this.empresa).subscribe(
            Response => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro exitoso
                this.snackBar.open('La máquina ha sido Eliminada', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            },
            Error => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro erroneo
                this.snackBar.open('No se ha podido Eliminar la máquina', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            }
        );
    }
}
