import { Component, OnInit } from '@angular/core';
import { ItemCarrito } from './../../models/itemCarrito';
 //import { TarjetProductos } from 'src/app/models/ventsModel';

@Component({
  selector: 'app-carriles',
  templateUrl: './carriles.component.html',
  styleUrls: ['./carriles.component.css']
})
export class CarrilesComponent implements OnInit{

  listaItemsCarrito: ItemCarrito [] | undefined


ngOnInit(): void {
 
  let carrito = [];
  
   let carritoStorage = localStorage.getItem("carrito") as string;
 carrito = JSON.parse(carritoStorage);
 this.listaItemsCarrito = carrito; 



 const calcularTotal=() =>{
let suma= 0;
for (let i = 0; i < carrito.length; i++) {
  suma += carrito [i].precio * carrito [i].cantidad;
}

document.getElementById("total-carrito").innerHTML=Number(suma).toFixed(2);
}


calcularTotal();







}
vaciarCarrito(){
  localStorage.clear();
  this.listaItemsCarrito=[];
  document.getElementById("total-carrito").innerHTML = ""

}
  eliminarProducto(id: Number): void {
    this.listaItemsCarrito=this.listaItemsCarrito.filter(articulo=> articulo.id !==id)
   
  };




}










