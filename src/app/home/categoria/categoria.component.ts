import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  // lista de categorias con imagenes
  categoria = [
    { nombre: 'aberturas', imagenUrl: 'assets/categoria/aberturas.png' },
    { nombre: 'ceramicos', imagenUrl: 'assets/categoria/ceramico.png' },
    { nombre: 'electricidad', imagenUrl: 'assets/categoria/electricidad.png' },
    { nombre: 'herramientas', imagenUrl: 'assets/categoria/herramienta.png' },
    { nombre: 'pinturas', imagenUrl: 'assets/categoria/botes.png' },
    { nombre: 'sanitario y plomeria', imagenUrl: 'assets/categoria/baños.png' }
  ];
}
