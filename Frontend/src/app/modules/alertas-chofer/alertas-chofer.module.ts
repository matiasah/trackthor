import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AlertasChoferRoutingModule } from './alertas-chofer-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { AlertasComponent } from './alertas/alertas.component';
import { RegistrarAlertaComponent } from './registrar-alerta/registrar-alerta.component';
import { EliminarAlertaModule } from '../alertas/eliminar-alerta/eliminar-alerta.module';

@NgModule({
    declarations: [
        AlertasComponent,
        RegistrarAlertaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AlertasChoferRoutingModule,
        EliminarAlertaModule,

        PipesModule,
    ],
    entryComponents: [
        RegistrarAlertaComponent
    ]
})
export class AlertasChoferModule { }
