import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ItemCarrito } from 'src/app/Models/itemCarrito';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {

  productos:Producto[];
  listarProductos: Producto[];
  productoBuscado: string = '';

  constructor(private productoService:ProductoService , private router:Router){}

  ngOnInit(){
    this.productoService.getTodos()
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
  precio:item.precio,
  cantidad: 1
}
let carrito: ItemCarrito []= [];
carrito.push(iCarrito);
localStorage.setItem("carrito",JSON.stringify(carrito));
}

}
