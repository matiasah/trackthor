import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ArriendosChoferRoutingModule } from './arriendos-chofer-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { ArriendosComponent } from './arriendos/arriendos.component';
import { RegistrarHoraTrabajadaComponent } from './registrar-hora-trabajada/registrar-hora-trabajada.component';

@NgModule({
    declarations: [
        ArriendosComponent,
        RegistrarHoraTrabajadaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ArriendosChoferRoutingModule,

        PipesModule,
    ],
    entryComponents: [
        RegistrarHoraTrabajadaComponent
    ]
})
export class ArriendosChoferModule { }
