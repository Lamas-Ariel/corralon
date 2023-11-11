import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { PreguntasComponent } from './preguntas/preguntas.component';



@NgModule({
  declarations: [
    ContactoComponent,
    ConsultaComponent,
    PreguntasComponent
  ],
  imports: [
    CommonModule

  ]
})
export class ContactoModule { 
  
}
