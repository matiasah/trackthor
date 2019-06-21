import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleGuard } from 'src/app/guards/role.guard';
import { RoleRoute } from 'src/app/models/role-route.enum';

import { ChoferComponent } from './chofer/chofer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: RoleRoute.ROLE_USER_CHOFER,
        component: ChoferComponent,
        canActivate: [RoleGuard],
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'arriendos',
                loadChildren: '../arriendos-chofer/arriendos-chofer.module#ArriendosChoferModule'
            },
            {
                path: 'alertas',
                loadChildren: '../alertas-chofer/alertas-chofer.module#AlertasChoferModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ChoferRoutingModule { }
