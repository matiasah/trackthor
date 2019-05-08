import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TiposMaquinasComponent } from './tipos-maquinas/tipos-maquinas.component';

const routes: Routes = [
    {
        path: '',
        component: TiposMaquinasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TiposMaquinasRoutingModule { }
