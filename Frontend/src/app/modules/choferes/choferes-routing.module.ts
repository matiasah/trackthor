import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChoferesComponent } from './choferes/choferes.component';

const routes: Routes = [
    {
        path: '',
        component: ChoferesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChoferesRoutingModule { }
