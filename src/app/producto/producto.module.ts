import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { ProductoComponent } from './producto/producto.component';



@NgModule({
  declarations: [
    BarraLateralComponent,
    DetalleComponent,
    FiltroComponent,
    CardProductoComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductoModule { }
