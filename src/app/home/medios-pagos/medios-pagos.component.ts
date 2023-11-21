import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { productos } from '../data/dtosProductos';
import { Producto } from 'src/app/Models/productos2';
import { ItemCarrito } from 'src/app/Models/itemCarrito';

@Component({
  selector: 'app-medios-pagos',
  templateUrl: './medios-pagos.component.html',
  styleUrls: ['./medios-pagos.component.css']
})
export class MediosPagosComponent implements OnInit{
  ItemCarrit: ItemCarrito;
  lista2: Producto []= [];
  productoElegido: Producto=new Producto();
  
  
  constructor(){
    this.lista2=productos;
     console.log('prueba'+this.lista2); 
     
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    console.log(this.lista2);
  }


  
 verProducto(pro: Producto): void{
this.productoElegido = pro;
console.log(this.productoElegido);
 }

 agregarCarrito(item: Producto){
  let iCarrito: ItemCarrito = {
    id:item.id,
    nombre:item.nombre,
    precio:item.precio,
    cantidad: 1
  }
  let carrito: ItemCarrito []= [];
  carrito.push(iCarrito);
  localStorage.setItem("carrito",JSON.stringify(carrito));
 }
 

}