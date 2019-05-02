import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquinariasRoutingModule } from './maquinarias-routing.module';
import { MaquinariasComponent } from './maquinarias/maquinarias.component';
import { MaterialModule } from '../material/material.module';
import { RegistrarMaquinariaComponent } from './registrar-maquinaria/registrar-maquinaria.component';

@NgModule({
  declarations: [    
    MaquinariasComponent,
    RegistrarMaquinariaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,    
    MaquinariasRoutingModule
  ],
  entryComponents: [
    RegistrarMaquinariaComponent,
  ]
})
export class MaquinariasModule { }
