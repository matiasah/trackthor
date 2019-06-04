import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArriendosComponent } from './arriendos/arriendos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ArriendosRoutingModule } from './arriendos-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { RegistrarArriendoComponent } from './registrar-arriendo/registrar-arriendo.component';
import { EditarArriendoComponent } from './editar-arriendo/editar-arriendo.component';

@NgModule({
  declarations: [
    ArriendosComponent,
    RegistrarArriendoComponent,
    EditarArriendoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ArriendosRoutingModule,

    PipesModule,
  ],
  entryComponents:[
    RegistrarArriendoComponent,
    EditarArriendoComponent,
  ]
})
export class ArriendosModule { }
