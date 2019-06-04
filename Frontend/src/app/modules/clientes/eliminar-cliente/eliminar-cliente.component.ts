import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
    selector: 'app-eliminar-cliente',
    templateUrl: './eliminar-cliente.component.html',
    styleUrls: ['./eliminar-cliente.component.scss']
})
export class EliminarClienteComponent implements OnInit {

    // Indicar que se encuentra eliminando
    public eliminando = false;

    public constructor(
        private dialogRef: MatDialogRef<EliminarClienteComponent>,
        private clienteService: ClienteService,
        @Inject(MAT_DIALOG_DATA) public cliente: Cliente,
        private snackBar: MatSnackBar
    ) {

    }

    public ngOnInit() {

    }

    public eliminar() {
        // Indicar que se encuentra eliminando
        this.eliminando = true;

        // Eliminar
        this.clienteService.delete(this.cliente).subscribe(
            Response => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro exitoso
                this.snackBar.open('El cliente ha sido eliminado', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            },
            Error => {
                // Indicar que no se encuentra registrando
                this.eliminando = false;

                // Notificar registro erroneo
                this.snackBar.open('No se ha podido eliminar el cliente', 'Aceptar', { duration: 2000 });

                // Cerrar modal
                this.dialogRef.close();
            }
        );
    }

}
