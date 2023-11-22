import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { productos } from '../data/dtosProductos';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class productoservice {

  constructor(private http:HttpClient) { }
//url puerto: ap propieties by Spring
  private urlEndPoint: string = 'http://localhost:8084/api'+'/producto';
//obtener Todos
  getTodos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint);
  }
//obtener x id
  getXid(id:number):Observable<Producto>{
    return this.http.get<Producto>(this.urlEndPoint+'/'+id);
  }
  //crear 
  crear(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoint, producto);
  }

  //actualizar
  actualizar(Producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.urlEndPoint+'/'+Producto.id, Producto);
  }
//eliminar
  borrar(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
}
