import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { EliminarAlertaComponent } from './eliminar-alerta.component';

@NgModule({
    declarations: [
        EliminarAlertaComponent
    ],
    exports: [
        EliminarAlertaComponent
    ],
    entryComponents: [
        EliminarAlertaComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        PipesModule,
    ]
})
export class EliminarAlertaModule { }
