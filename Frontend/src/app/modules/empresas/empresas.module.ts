import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { EmpresasRoutingModule } from './empresas-routing.module';

import { EmpresasComponent } from './empresas/empresas.component';
import { RegistrarEmpresaComponent } from './registrar-empresa/registrar-empresa.component';
import { EliminarEmpresaComponent } from './eliminar-empresa/eliminar-empresa.component';

@NgModule({
    declarations: [
        EmpresasComponent,
        RegistrarEmpresaComponent,
        EliminarEmpresaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        EmpresasRoutingModule,
    ],
    entryComponents: [
        RegistrarEmpresaComponent,
        EliminarEmpresaComponent
    ]
})
export class EmpresasModule { }
