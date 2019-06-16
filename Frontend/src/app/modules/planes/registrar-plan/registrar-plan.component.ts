import { Component, OnInit, ViewChild } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-registrar-plan',
  templateUrl: './registrar-plan.component.html',
  styleUrls: ['./registrar-plan.component.scss']
})
export class RegistrarPlanComponent implements OnInit {

  // Plan a registrar
  public plan: Plan = {} as Plan;

  // Indicar si se encuentra registrando
  public registrando = false;

  // Formulario
  @ViewChild('form')
  public form: NgForm;

  public constructor(
    private dialogRef: MatDialogRef<RegistrarPlanComponent>,
    private snackBar: MatSnackBar,
    private planService: PlanService
  ) { }

  public ngOnInit() {
  }

  public onSubmit(): void {
    // Si el formulario es válido
    if (this.form.valid) {
      // Indicar que se encuentra registrando
      this.registrando = true;

      // Registrar
      this.planService.save(this.plan).subscribe(
        Respose => {
          // Indicar que no se encuentra registrando
          this.registrando = false;

          // Notificar registro exitoso
          this.snackBar.open('El plan ha sido registrada', 'Aceptar', { duration: 2000 });

          // Cerrar modal
          this.dialogRef.close();
        },
        Error => {
          // Indicar que no se encuentra registrando
          this.registrando = false;

          // Notificar registro erroneo
          this.snackBar.open('No se ha podido registrar el plan', 'Aceptar', { duration: 2000 });

          // Cerrar modal
          this.dialogRef.close();
        }
      );
    }
  }

}
