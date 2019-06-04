import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';

@NgModule({
    declarations: [
        ClientesComponent,
        RegistrarClienteComponent,
        EliminarClienteComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ClientesRoutingModule,
    ],
    entryComponents: [
        RegistrarClienteComponent,
        EliminarClienteComponent
    ]
})
export class ClientesModule { }
