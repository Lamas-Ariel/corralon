import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { ItemCarrito } from 'src/app/models/itemCarrito';
import { productoservice } from 'src/app/services/Producto.service';



@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {

  productos:Producto[];
  listarProductos: Producto[];
  productoBuscado: string = '';

  constructor(private productoservice:productoservice , private router:Router){}

  ngOnInit(){
    this.productoservice.getTodos()
    .subscribe(data=>{
      this.productos=data
      this.listarProductos=data
    })
  }

  buscarXNombre(): void{
    this.listarProductos = this.productos.filter(nombre=>
      nombre.nom.toUpperCase().includes(this.productoBuscado.toUpperCase()));
    console.log(this.productos);
  }

  carrito
ItemCarrit: ItemCarrito;
lista2: Producto []= [];
productoElegido: Producto=new Producto();
  


  
verProducto(pro: Producto): void{
this.productoElegido = pro;
console.log(this.productoElegido);
}

agregarCarrito(item: Producto){
let iCarrito: ItemCarrito = {
id:item.id,
  nombre:item.nom,
  precio:item.precio_producto,
  cantidad: 1
}
let carrito: ItemCarrito []= [];
carrito.push(iCarrito);
localStorage.setItem("carrito",JSON.stringify(carrito));
}

}
