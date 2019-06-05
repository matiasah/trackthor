import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { EmpresasRoutingModule } from './empresas-routing.module';

import { EmpresasComponent } from './empresas/empresas.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { EliminarEmpresaModule } from './eliminar-empresa/eliminar-empresa.module';
import { EditarEmpresaModule } from './editar-empresa/editar-empresa.module';

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
        EmpresasRoutingModule,
        EliminarEmpresaModule,
        EditarEmpresaModule,
    ],
    entryComponents: [
        RegistrarEmpresaComponent
    ]
})
export class EmpresasModule { }
