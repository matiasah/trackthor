import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { EditarEmpresaComponent } from './editar-empresa.component';

@NgModule({
    declarations: [
        EditarEmpresaComponent
    ],
    exports: [
        EditarEmpresaComponent
    ],
    entryComponents: [
        EditarEmpresaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ]
})
export class EditarEmpresaModule { }
