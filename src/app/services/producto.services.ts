import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductosA } from '../models/modelsA/ProductosA';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
//url puerto: ap propieties by Spring
  private urlEndPoint: string = 'http://localhost:8084/api'+'/producto';
//obtener Todos
  getTodos():Observable<ProductosA[]>{
    return this.http.get<ProductosA[]>(this.urlEndPoint);
  }
//obtener x id
  getXid(id:number):Observable<ProductosA>{
    return this.http.get<ProductosA>(this.urlEndPoint+'/'+id);
  }
  //crear 
  crear(producto:ProductosA):Observable<ProductosA>{
    return this.http.post<ProductosA>(this.urlEndPoint, producto);
  }

  //actualizar
  actualizar(ProductosA:ProductosA):Observable<ProductosA>{
    return this.http.put<ProductosA>(this.urlEndPoint+'/'+ProductosA.id, ProductosA);
  }
//eliminar
  borrar(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
}