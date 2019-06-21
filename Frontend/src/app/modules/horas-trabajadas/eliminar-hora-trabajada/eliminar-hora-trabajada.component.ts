import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { HoraTrabajadaService } from 'src/app/services/hora-trabajada.service';
import { HoraTrabajada } from 'src/app/models/hora-trabajada';

@Component({
    selector: 'app-eliminar-hora-trabajada',
    templateUrl: './eliminar-hora-trabajada.component.html',
    styleUrls: ['./eliminar-hora-trabajada.component.scss'],
})
export class EliminarHoraTrabajadaComponent implements OnInit {

    // Indicar que se encuentra eliminando
    public eliminando = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarHoraTrabajadaComponent>,
        private horaTrabajadaService: HoraTrabajadaService,
        @Inject(MAT_DIALOG_DATA) public horaTrabajada: HoraTrabajada,
        private snackBar: MatSnackBar
    ) {

    }

    public ngOnInit() {

    }

    public eliminar() {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.horaTrabajadaService.delete(this.horaTrabajada).subscribe(
            Response => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro exitoso
                this.snackBar.open('La hora trabajada ha sido eliminado', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            },
            Error => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro erroneo
                this.snackBar.open('No se ha podido eliminar la hora trabajada', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            }
        );
    }

}
