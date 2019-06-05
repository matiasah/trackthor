import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ArriendoService } from 'src/app/services/arriendo.service';
import { Arriendo } from 'src/app/models/arriendo';

@Component({
    selector: 'app-eliminar-arriendo',
    templateUrl: './eliminar-arriendo.component.html',
    styleUrls: ['./eliminar-arriendo.component.scss']
})
export class EliminarArriendoComponent implements OnInit {

    // Indicar que se encuentra eliminando
    public eliminando = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarArriendoComponent>,
        private arriendoService: ArriendoService,
        @Inject(MAT_DIALOG_DATA) public arriendo: Arriendo,
        private snackBar: MatSnackBar
    ) {

    }

    public ngOnInit() {

    }

    public eliminar() {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.arriendoService.delete(this.arriendo).subscribe(
            Response => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro exitoso
                this.snackBar.open('El arriendo ha sido eliminado', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            },
            Error => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro erroneo
                this.snackBar.open('No se ha podido eliminar el arriendo', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            }
        );
    }
}
