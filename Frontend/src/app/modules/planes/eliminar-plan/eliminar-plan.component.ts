import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-eliminar-plan',
  templateUrl: './eliminar-plan.component.html',
  styleUrls: ['./eliminar-plan.component.scss']
})
export class EliminarPlanComponent implements OnInit {

  // Indicar que se encuentra eliminando
  public eliminando = false;

  public constructor(
    private dialogRef: MatDialogRef<EliminarPlanComponent>,
    private planService: PlanService,
    @Inject(MAT_DIALOG_DATA) public plan: Plan,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit() {
  }

  public eliminar() {
    // Indicar que se encuentra eliminando
    this.eliminando = true;

    // Eliminar
    this.planService.delete(this.plan).subscribe(
      Response => {
        // Indicar que no se encuentra eliminando
        this.eliminando = false;

        // Notificar accion exitosa
        this.snackBar.open('El plan ha sido eliminado', 'Aceptar', { duration: 2000 });

        // Cerrar modal
        this.dialogRef.close();
      },
      Error => {
        // Indicar que no se encuentra eliminando
        this.eliminando = false;

        // Notificar accion erronea
        this.snackBar.open('No se ha podido eliminar el plan', 'Aceptar', { duration: 2000 });

        // Cerrar modal
        this.dialogRef.close();
      }
    );
  }

}
