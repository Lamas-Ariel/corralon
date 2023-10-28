import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { MediosPagosComponent } from './medios-pagos/medios-pagos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';



@NgModule({
  declarations: [
    CarrucelComponent,
    CategoriaComponent,
    HomeComponent,
    MediosPagosComponent,
    ProveedoresComponent,
    UbicacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
