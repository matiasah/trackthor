import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquinariasRoutingModule } from './maquinarias-routing.module';
import { MaterialModule } from '../material/material.module';

import { MaquinariasComponent } from './maquinarias/maquinarias.component';
import { RegistrarMaquinariaComponent } from './registrar-maquinaria/registrar-maquinaria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MaquinariasComponent,
        RegistrarMaquinariaComponent,
    ],
    imports: [
        CommonModule,
        MaquinariasRoutingModule,
        MaterialModule,
        FormsModule,
    ],    
    entryComponents: [
        RegistrarMaquinariaComponent,
    ]
})
export class MaquinariasModule { }
