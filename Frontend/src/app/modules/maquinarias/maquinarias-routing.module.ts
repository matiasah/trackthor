import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaquinariasComponent } from './maquinarias/maquinarias.component';

const routes: Routes = [
    {
        path: '',
        component: MaquinariasComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaquinariasRoutingModule { }
