import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MaquinasRoutingModule } from './maquinas-routing.module';
import { AngularOpenlayersModule } from 'ngx-openlayers';

import { MaquinasComponent } from './maquinas/maquinas.component';
import { RegistrarMaquinaComponent } from './registrar-maquina/registrar-maquina.component';
import { EliminarMaquinaComponent } from './eliminar-maquina/eliminar-maquina.component';
import { EditarMaquinaComponent } from './editar-maquina/editar-maquina.component';

import { PipesModule } from 'src/app/pipes/pipes/pipes.module';

@NgModule({
    declarations: [
        MaquinasComponent,
        RegistrarMaquinaComponent,
        EliminarMaquinaComponent,
        EditarMaquinaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MaquinasRoutingModule,
        AngularOpenlayersModule,
    ],
    entryComponents: [
        RegistrarMaquinaComponent,
        EliminarMaquinaComponent,
        EditarMaquinaComponent,
    ]
})
export class MaquinasModule { }
