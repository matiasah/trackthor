import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdministradorSistemaRoutingModule } from './administrador-sistema-routing.module';
import { AdministradorSistemaComponent } from './administrador-sistema/administrador-sistema.component';

@NgModule({
    declarations: [
        AdministradorSistemaComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AdministradorSistemaRoutingModule,
    ]
})
export class AdministradorSistemaModule { }
