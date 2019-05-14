import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleGuard } from 'src/app/guards/role.guard';
import { RoleRoute } from 'src/app/models/role-route.enum';

import { AdministradorEmpresaComponent } from './administrador-empresa/administrador-empresa.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: RoleRoute.USER_ADMIN_EMPRESA,
        component: AdministradorEmpresaComponent,
        canActivate: [RoleGuard],
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'maquinas',
                loadChildren: '../maquinas/maquinas.module#MaquinasModule'
            },
            {
                path: 'choferes',
                loadChildren: '../choferes/choferes.module#ChoferesModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdministradorEmpresaRoutingModule { }
