import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ChoferRoutingModule } from './chofer-routing.module';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';

import { ChoferComponent } from './chofer/chofer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        ChoferComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ChoferRoutingModule,
        PipesModule
    ]
})
export class ChoferModule { }
