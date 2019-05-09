import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiposMaquinasRoutingModule } from './tipos-maquinas.routing.module';
import { MaterialModule } from '../material/material.module';

import { TiposMaquinasComponent } from './tipos-maquinas/tipos-maquinas.component';
import { RegistrarTipoMaquinaComponent } from './registrar-tipo-maquina/registrar-tipo-maquina.component';

@NgModule({
    declarations: [
        TiposMaquinasComponent,
        RegistrarTipoMaquinaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TiposMaquinasRoutingModule,
        MaterialModule,
    ],
    entryComponents: [
        RegistrarTipoMaquinaComponent
    ]
})
export class TiposMaquinasModule { }
