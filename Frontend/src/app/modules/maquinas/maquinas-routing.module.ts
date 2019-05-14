import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaquinasComponent } from './maquinas/maquinas.component';

const routes: Routes = [
    {
        path: '',
        component: MaquinasComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaquinasRoutingModule { }
