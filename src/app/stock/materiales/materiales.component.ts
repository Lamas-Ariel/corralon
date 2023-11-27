import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProductoService } from '../../services/producto.services';
import { ProductosA } from 'src/app/models/modelsA/ProductosA';
import { ItemA } from 'src/app/models/modelsA/ItemA';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit{
  listaMateriales: ProductosA []= [];
  ItemA: ItemA;
  lista2: ProductosA[] = [];
  productoElegido: ProductosA = new ProductosA();
  
  constructor(private ProductoService:ProductoService, private router:Router){}
  
  ngOnInit(): void {
    console.log('ejectuta materiales');
    this.ProductoService.getTodos().subscribe(
      response=>{
        console.log('lista prod DB' , response)
        this.listaMateriales = response;
        console.log('lista prod', this.listaMateriales);
      }
    )
  }

  verProducto(pro: ProductosA): void {
    this.productoElegido = pro;
    console.log(this.productoElegido);
  }

 agregarCarrito(item: ProductosA) {
   let iCarrito: ItemA = {
     id: item.id,
     producto: item,
     cantidad: 1,
   };
   if (localStorage.getItem('carrito') === null) {
     let carrito: ItemA[] = [];
     carrito.push(iCarrito);
     localStorage.setItem('carrito', JSON.stringify(carrito));
   } else {
     let carritoStorage = localStorage.getItem('carrito') as string;
     let carrito = JSON.parse(carritoStorage);
     let index = -1;
     for (let i = 0; i < carrito.length; i++) {
       let itemC: ItemA = carrito[i];
       if (iCarrito.id === itemC.id) {
         index = i;
         break;
       }
     }
     if (index === -1) {
       carrito.push(iCarrito);
       localStorage.setItem('carrito', JSON.stringify(carrito));
     } else {
       let itemCarrito: ItemA = carrito[index];
       itemCarrito.cantidad++;
       carrito[index] = itemCarrito;
       localStorage.setItem('carrito', JSON.stringify(carrito));
     }
   }
 }

}


 
