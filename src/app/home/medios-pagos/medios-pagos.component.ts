import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductosA } from 'src/app/models/modelsA/ProductosA';
import { ItemA } from '../../models/modelsA/ItemA';
import { itemCarrito } from '../../models/itemCarrito';
import { ProductoService } from 'src/app/services/producto.services';

@Component({
  selector: 'app-medios-pagos',
  templateUrl: './medios-pagos.component.html',
  styleUrls: ['./medios-pagos.component.css'],
})
export class MediosPagosComponent implements OnInit {
  ItemA: ItemA;
  lista2: ProductosA[] = [];
  productoElegido: ProductosA = new ProductosA();

  constructor(private productoservice: ProductoService) {
    this.productoservice.getTodos().subscribe((respose) => {
      this.lista2 = respose;
      console.log(this.lista2);
    });
    console.log('prueba' + this.lista2);
  }

  cargar(): void {
    this.productoservice.getTodos().subscribe((respose) => {
      this.lista2 = respose;
      console.log(respose);
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.lista2);
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
  // agregarCarrito(item: ProductosA){
  //   console.log(item);

  //   let iCarrito: ItemA = {
  //     id: item.id,
  //     producto: item,
  //     cantidad: 1,
  //   }
  //   let carrito: ItemA[] = [];
  //   carrito.push(iCarrito);
  //   localStorage.setItem('carrito', JSON.stringify(carrito));
  // }

}
