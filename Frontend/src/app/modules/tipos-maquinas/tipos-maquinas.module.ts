import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposMaquinasRoutingModule } from './tipos-maquinas.routing.module';
import { MaterialModule } from '../material/material.module';

import { TiposMaquinasComponent } from './tipos-maquinas/tipos-maquinas.component';

@NgModule({
    declarations: [
        TiposMaquinasComponent
    ],
    imports: [
        CommonModule,
        TiposMaquinasRoutingModule,
        MaterialModule,
    ]
})
export class TiposMaquinasModule { }
