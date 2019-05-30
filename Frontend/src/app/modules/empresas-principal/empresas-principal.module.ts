import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { EmpresasPrincipalRoutingModule } from './empresas-principal-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { RegistrarEmpresaComponent } from '../empresas/registrar-empresa/registrar-empresa.component';

@NgModule({
    declarations: [
        EmpresasComponent,
        RegistrarEmpresaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        EmpresasPrincipalRoutingModule,
    ],
    entryComponents: [
        RegistrarEmpresaComponent
    ]
})
export class EmpresasPrincipalModule { }
