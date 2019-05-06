import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorEmpresaComponent } from './administrador-empresa.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { AdministradorEmpresaRoutingModule } from './administrador-empresa-routing.module';

@NgModule({
  declarations: [
    AdministradorEmpresaComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdministradorEmpresaRoutingModule,    
  ]
})
export class AdministradorEmpresaModule { }
