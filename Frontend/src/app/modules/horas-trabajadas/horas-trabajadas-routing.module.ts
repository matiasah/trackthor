import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HorasTrabajadasComponent } from './horas-trabajadas/horas-trabajadas.component';

const routes: Routes = [
    {
        path: '',
        component: HorasTrabajadasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HorasTrabajadasRoutingModule { }
