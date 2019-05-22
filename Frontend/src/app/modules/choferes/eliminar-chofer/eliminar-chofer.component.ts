import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { UsuarioChoferService } from 'src/app/services/usuario-chofer.service';
import { UsuarioChofer } from 'src/app/models/usuario-chofer';

@Component({
    selector: 'app-eliminar-chofer',
    templateUrl: './eliminar-chofer.component.html',
    styleUrls: ['./eliminar-chofer.component.scss']
})
export class EliminarChoferComponent implements OnInit {

    // Indicar que se encuentra eliminando
    public eliminando = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarChoferComponent>,
        private usuarioChoferService: UsuarioChoferService,
        @Inject(MAT_DIALOG_DATA) public chofer: UsuarioChofer,
        private snackBar: MatSnackBar,
    ) {

    }

    public ngOnInit() {
    }

    public eliminar() {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.usuarioChoferService.delete(this.chofer).subscribe(
            Response => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro exitoso
                this.snackBar.open('El chofer ha sido Eliminado', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            },
            Error => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro erroneo
                this.snackBar.open('No se ha podido Eliminar al chofer', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            }
        );
    }

}
