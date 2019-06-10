import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesComponent } from './planes/planes.component';
import { RegistrarPlanComponent } from './registrar-plan/registrar-plan.component';
import { EditarPlanComponent } from './editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './eliminar-plan/eliminar-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PlanesRoutingModule } from './planes-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';

@NgModule({
  declarations: [
    PlanesComponent,
    RegistrarPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PlanesRoutingModule,
    PipesModule,
  ],
  entryComponents: [
    RegistrarPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent
  ]
})
export class PlanesModule { }
