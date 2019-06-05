import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { EliminarEmpresaComponent } from './eliminar-empresa.component';

@NgModule({
    declarations: [
        EliminarEmpresaComponent,
    ],
    exports: [
        EliminarEmpresaComponent
    ],
    entryComponents: [
        EliminarEmpresaComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
})
export class EliminarEmpresaModule { }
