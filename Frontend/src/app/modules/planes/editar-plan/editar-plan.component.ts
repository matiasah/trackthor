import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.scss']
})
export class EditarPlanComponent implements OnInit {

  // Plan a editar
  public plan: Plan;

  // Indicar si se encuentra registrando
  public registrando = false;

  // Formulario
  @ViewChild('form')
  public form: NgForm;

  public constructor(
    private dialogRef: MatDialogRef<EditarPlanComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private snackBar: MatSnackBar,
    private planService: PlanService
  ) { }

  public ngOnInit() {
    // Obtener plan
    this.planService.get(this.data._links.self.href).subscribe(
      Response => {
        this.plan = Response;
      }
    )
  }

  public onSubmit(): void {
    // Si el formulario es válido
    if (this.form.valid) {
      // Indicar que se encuentra registrando
      this.registrando = true;

      // Registrar
      this.planService.update(this.plan).subscribe(
        Respose => {
          // Indicar que no se encuentra registrando
          this.registrando = false;

          // Notificar registro exitoso
          this.snackBar.open('El plan ha sido editada', 'Aceptar', { duration: 2000 });

          // Cerrar modal
          this.dialogRef.close();
        },
        Error => {
          // Indicar que no se encuentra registrando
          this.registrando = false;

          // Notificar registro erroneo
          this.snackBar.open('No se ha podido editar el plan', 'Aceptar', { duration: 2000 });

          // Cerrar modal
          this.dialogRef.close();
        }
      );
    }
  }
}
