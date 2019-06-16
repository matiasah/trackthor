import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleGuard } from 'src/app/guards/role.guard';
import { RoleRoute } from 'src/app/models/role-route.enum';

import { AdministradorSistemaComponent } from './administrador-sistema/administrador-sistema.component';

const routes: Routes = [
    {
        path: RoleRoute.USER_ADMIN_SISTEMA,
        component: AdministradorSistemaComponent,
        canActivate: [RoleGuard],
        children: [
            {
                path: 'tipos-maquinas',
                loadChildren: '../tipos-maquinas/tipos-maquinas.module#TiposMaquinasModule'
            },
            {
                path: 'empresas',
                loadChildren: '../empresas/empresas.module#EmpresasModule'
            },
            {
                path: 'planes',
                loadChildren: '../planes/planes.module#PlanesModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdministradorSistemaRoutingModule { }
