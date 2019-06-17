import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AlertaService } from 'src/app/services/alerta.service';
import { Alerta } from 'src/app/models/alerta';

@Component({
    selector: 'app-eliminar-alerta',
    templateUrl: './eliminar-alerta.component.html',
    styleUrls: ['./eliminar-alerta.component.scss'],
})
export class EliminarAlertaComponent implements OnInit {

    // Indicar que se encuentra eliminando
    public eliminando = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarAlertaComponent>,
        private alertaService: AlertaService,
        @Inject(MAT_DIALOG_DATA) public alerta: Alerta,
        private snackBar: MatSnackBar
    ) {

    }

    public ngOnInit() {

    }

    public eliminar() {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.alertaService.delete(this.alerta).subscribe(
            Response => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro exitoso
                this.snackBar.open('La alerta ha sido eliminada', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            },
            Error => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro erroneo
                this.snackBar.open('No se ha podido eliminar la alerta', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            }
        );
    }

}
