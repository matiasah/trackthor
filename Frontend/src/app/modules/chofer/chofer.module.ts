import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ChoferRoutingModule } from './chofer-routing.module';
import { ChoferComponent } from './chofer/chofer.component';

@NgModule({
    declarations: [
        ChoferComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ChoferRoutingModule,
    ]
})
export class ChoferModule { }
