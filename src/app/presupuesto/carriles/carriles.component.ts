import { Component, OnInit } from '@angular/core';
import { ItemCarrito } from 'src/app/models/itemCarrito';
//import { TarjetProductos } from 'src/app/models/ventsModel';

@Component({
  selector: 'app-carriles',
  templateUrl: './carriles.component.html',
  styleUrls: ['./carriles.component.css']
})
export class CarrilesComponent implements OnInit{

  listaItemsCarrito: ItemCarrito [] | undefined

ngOnInit(): void {

 let carritoStorage = localStorage.getItem("carrito") as string;
 let carrito = JSON.parse(carritoStorage);
 this.listaItemsCarrito = carrito 
}
vaciarCarrito(){
  localStorage.clear();
  this.listaItemsCarrito=[];

}




}
