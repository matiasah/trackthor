import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AlertasRoutingModule } from './alertas-routing.module';
import { AlertasComponent } from './alertas/alertas.component';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { EliminarAlertaModule } from './eliminar-alerta/eliminar-alerta.module';

@NgModule({
    declarations: [
        AlertasComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AlertasRoutingModule,
        PipesModule,
        EliminarAlertaModule,
    ]
})
export class AlertasModule { }
