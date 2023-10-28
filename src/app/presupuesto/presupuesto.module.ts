import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrilesComponent } from './carriles/carriles.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';



@NgModule({
  declarations: [
    CarrilesComponent,
    ClienteComponent,
    PresupuestoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PresupuestoModule { }
