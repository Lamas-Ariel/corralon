import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';



@NgModule({
  declarations: [
    LoginComponent,
    InicioSesionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
