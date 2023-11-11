import { Component } from '@angular/core';

@Component({
  selector: 'app-medios-pagos',
  templateUrl: './medios-pagos.component.html',
  styleUrls: ['./medios-pagos.component.css']
})
export class MediosPagosComponent {
  
//  ngClass
  activo: string='';
// ngForLista
  productos:string[]=['jardin, luces, herramientas']
  // ngFor tabla
  carritos:Array<any>=[
{tipo:'Alambre',marca:'Vigo', precio:2000},
{tipo:'Mesa',marca:'Vigo', precio:2000},
{tipo:'silla',marca:'Vigo', precio:4000},  

]
}
