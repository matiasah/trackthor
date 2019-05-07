import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposMaquinasRoutingModule } from './tipos-maquinas.routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TiposMaquinasRoutingModule,
        MaterialModule,
    ]
})
export class TiposMaquinasModule { }
