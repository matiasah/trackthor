import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlertasComponent } from './alertas/alertas.component';

const routes: Routes = [
    {
        path: '',
        component: AlertasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlertasChoferRoutingModule { }
