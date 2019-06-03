import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { EmpresasPrincipalRoutingModule } from './empresas-principal-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { EliminarEmpresaModule } from '../empresas/eliminar-empresa/eliminar-empresa.module';

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
        EliminarEmpresaModule,
    ],
    entryComponents: [
        RegistrarEmpresaComponent
    ]
})
export class EmpresasPrincipalModule { }
