import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from 'src/app/guards/role.guard';
import { RoleRoute } from 'src/app/models/role-route.enum';

const routes: Routes = [
    /*
    {
        path: RoleRoute.USER_ADMIN_SERVICIO,
        component: AdministradorEmpresaComponent,
        children: []
    }
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdministradorServicioRoutingModule { }
