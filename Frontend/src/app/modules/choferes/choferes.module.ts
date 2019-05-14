import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoferesComponent } from './choferes/choferes.component';
import { ChoferesRoutingModule } from './choferes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrarChoferComponent } from './registrar-chofer/registrar-chofer.component';
import { EditarChoferComponent } from './editar-chofer/editar-chofer.component';
import { EliminarChoferComponent } from './eliminar-chofer/eliminar-chofer.component';

@NgModule({
  declarations: [
    ChoferesComponent,
    RegistrarChoferComponent,
    EditarChoferComponent,
    EliminarChoferComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChoferesRoutingModule,
  ],
  entryComponents: [
    RegistrarChoferComponent,
    EliminarChoferComponent,
    EditarChoferComponent,
  ]
})
export class ChoferesModule { }
