import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaquinariasComponent } from './maquinarias/maquinarias.component';
import { EditarMaquinaComponent } from './editar-maquina/editar-maquina.component';

const routes: Routes = [
    {
        path: '',
        component: MaquinariasComponent,
    },
    {
        path: ':id',
        component: EditarMaquinaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaquinariasRoutingModule { }
