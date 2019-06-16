import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ArriendosChoferRoutingModule } from './arriendos-chofer-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { ArriendosComponent } from './arriendos/arriendos.component';

@NgModule({
    declarations: [
        ArriendosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ArriendosChoferRoutingModule,

        PipesModule,
    ]
})
export class ArriendosChoferModule { }
