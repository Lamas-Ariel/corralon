import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  constructor(private router:Router){}

  // lista de categorias con imagenes
  categoria = [
    { nombre: 'aberturas', imagenUrl: 'assets/categoria/a.png' },
    { nombre: 'ceramicos', imagenUrl: 'assets/categoria/c.png' },
    { nombre: 'electricidad', imagenUrl: 'assets/categoria/e.png' },
    { nombre: 'herramientas', imagenUrl: 'assets/categoria/h.png' },
    { nombre: 'pinturas', imagenUrl: 'assets/categoria/p.png' },
    { nombre: 'sanitario y plomeria', imagenUrl: 'assets/categoria/b.png' }
  ];

  verProductos(){
    this.router.navigate(["productos"])
  }
}
