import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { UbicacionMaquinasComponent } from './ubicacion-maquinas/ubicacion-maquinas.component';

const routes: Routes = [
    {
        path: '',
        component: MaquinasComponent,
    },
    {
        path: 'ubicacion',
        component: UbicacionMaquinasComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaquinasRoutingModule { }
