import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { PresupuestoComponent } from './presupuesto/presupuesto/presupuesto.component';
import { MaterialesComponent } from './stock/materiales/materiales.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'stock',component:MaterialesComponent},

  {path:'login',component:LoginComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'presupuesto',component:PresupuestoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
