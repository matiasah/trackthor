import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina';
import { TipoMaquina } from 'src/app/models/tipo-maquina';

@Component({
  selector: 'app-eliminar-maquina',
  templateUrl: './eliminar-maquina.component.html',
  styleUrls: ['./eliminar-maquina.component.scss']
})
export class EliminarMaquinaComponent implements OnInit {

  // Máquina que se desea eliminar
  public maquina: Maquina;

  // Tipo de máquina que se desea eliminar
  public tipoMaquina: TipoMaquina;

  // Indicar que se encuentra eliminando
  public eliminando: Boolean = false;

  public constructor(
    private dialogRef: MatDialogRef<EliminarMaquinaComponent>,
    private maquinaService: MaquinaService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private snackBar: MatSnackBar,
  ) {

    // Modelo maquina datos para almacenar la maquina 
    this.maquina = data.maquina;

  }

  public ngOnInit() {
    this.maquinaService.getAtributo(this.maquina._links.tipoMaquina.href).subscribe(
      Response => {
        this.tipoMaquina = Response;
      }
    );
  }

  public eliminar() {
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
    )
  }
}
