import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
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
      nombre.n_producto.toUpperCase().includes(this.productoBuscado.toUpperCase()));
    console.log(this.productos);
  }

}
