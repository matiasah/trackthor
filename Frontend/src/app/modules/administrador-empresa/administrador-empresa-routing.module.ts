import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorEmpresaComponent } from './administrador-empresa.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdministradorEmpresaComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'maquinarias',
                loadChildren: '../maquinarias/maquinarias.module#MaquinariasModule'            
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdministradorEmpresaRoutingModule { }