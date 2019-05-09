import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MaquinariasRoutingModule } from './maquinarias-routing.module';

import { MaquinariasComponent } from './maquinarias/maquinarias.component';
import { RegistrarMaquinariaComponent } from './registrar-maquinaria/registrar-maquinaria.component';

@NgModule({
    declarations: [
        MaquinariasComponent,
        RegistrarMaquinariaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MaquinariasRoutingModule,
    ],
    entryComponents: [
        RegistrarMaquinariaComponent,
    ]
})
export class MaquinariasModule { }
