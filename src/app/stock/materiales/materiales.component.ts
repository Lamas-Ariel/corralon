import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProductoService } from '../../services/producto.services';
import { ProductosA } from 'src/app/models/modelsA/ProductosA';
import { ItemA } from 'src/app/models/modelsA/ItemA';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  //buscador
  productoBuscado: string = '';
  productos:ProductosA[];
  
  constructor(private ProductoService:ProductoService, private router:Router){}
  
  ngOnInit(): void {
    console.log('ejectuta materiales');
    this.ProductoService.getTodos().subscribe(
      response=>{
        console.log('lista prod DB' , response)
        //cargaNuevalista en productos
        this.productos=response;
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
  //alerta carrito
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Producto agregado",
    showConfirmButton: false,
    timer: 1500
  });
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

 buscarXNombre(): void{
  this.listaMateriales = this.productos.filter(nombre=>
    nombre.nom.toUpperCase().includes(this.productoBuscado.toUpperCase()));
  console.log(this.productos);
}

}


 
