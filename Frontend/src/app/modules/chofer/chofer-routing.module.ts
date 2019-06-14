import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleGuard } from 'src/app/guards/role.guard';
import { RoleRoute } from 'src/app/models/role-route.enum';

import { ChoferComponent } from './chofer/chofer.component';

const routes: Routes = [
    {
        path: RoleRoute.USER_CHOFER,
        component: ChoferComponent,
        canActivate: [RoleGuard]
        //children: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ChoferRoutingModule { }
