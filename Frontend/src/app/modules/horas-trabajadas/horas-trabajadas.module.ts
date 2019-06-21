import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HorasTrabajadasRoutingModule } from './horas-trabajadas-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';

import { HorasTrabajadasComponent } from './horas-trabajadas/horas-trabajadas.component';
import { EliminarHoraTrabajadaComponent } from './eliminar-hora-trabajada/eliminar-hora-trabajada.component';

@NgModule({
    declarations: [
        HorasTrabajadasComponent,
        EliminarHoraTrabajadaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HorasTrabajadasRoutingModule,

        PipesModule
    ],
    entryComponents: [
        EliminarHoraTrabajadaComponent
    ]
})
export class HorasTrabajadasModule { }
