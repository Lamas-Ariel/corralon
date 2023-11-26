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
  constructor(private ProductoService:ProductoService, private router:Router){}
  ngOnInit(): void {
    console.log('ejectuta materiales');
  }

  
obtenerTodos(): void {
  this.ProductoService.getTodos().subscribe(
    response=>{
      console.log('lista prod DB' , response)
      this.listaMateriales = response;
      console.log('lista prod', this.listaMateriales);
    }
  )
}
}


 
