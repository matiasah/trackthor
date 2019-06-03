import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpresasComponent } from './empresas/empresas.component';

const routes: Routes = [
    {
        path: '',
        component: EmpresasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresasPrincipalRoutingModule { }