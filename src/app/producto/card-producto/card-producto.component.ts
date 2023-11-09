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

  constructor(private productoService:ProductoService , private router:Router){}

  ngOnInit(){
    this.productoService.getTodos()
    .subscribe(data=>{
      this.productos=data
    })
  }



}
