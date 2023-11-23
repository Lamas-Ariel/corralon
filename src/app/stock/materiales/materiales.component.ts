import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.services';
import { ProductosA } from 'src/app/models/modelsA/ProductosA';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent {

constructor(private ProductoService:ProductoService){}

/*listamateriales: ProductosA[]=[];
 listaM(listamateriales){
  this.ProductoService.getTodos().subscribe(respose => {
    this.listamateriales = respose;
    console.log(respose);
  })
  

}

*/}