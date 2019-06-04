import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArriendosComponent } from './arriendos/arriendos.component';

const routes: Routes = [
    {
        path: '',
        component: ArriendosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArriendosRoutingModule { }
