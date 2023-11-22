import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ContactoModule } from './contacto/contacto.module';
import { LoginModule } from './login/login.module';
import { PresupuestoModule } from './presupuesto/presupuesto.module';
import { ProductoModule } from './producto/producto.module';
import {HttpClientModule} from '@angular/common/http';
import { productoservice } from './services/producto.service';
import { ReactiveFormsModule } from '@angular/forms';

// const routes: Routes=[
  // {path:'medios-pagos', component: MediosPagosComponent }
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ContactoModule,
    LoginModule,
    PresupuestoModule,
    ProductoModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
    ReactiveFormsModule
  ],

  providers: [productoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
