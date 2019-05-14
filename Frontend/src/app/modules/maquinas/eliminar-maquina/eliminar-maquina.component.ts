import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';

@Component({
    selector: 'app-eliminar-maquina',
    templateUrl: './eliminar-maquina.component.html',
    styleUrls: ['./eliminar-maquina.component.scss']
})
export class EliminarMaquinaComponent implements OnInit {

    // Indicar que se encuentra eliminando
    public eliminando = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarMaquinaComponent>,
        private maquinaService: MaquinaService,
        @Inject(MAT_DIALOG_DATA) private maquina: Maquina,
        private snackBar: MatSnackBar,
    ) {

    }

    public ngOnInit() {

    }

    public eliminar() {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.maquinaService.delete(this.maquina).subscribe(
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
