import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from '../Models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8084/api/productos';

  //observable sacar si no funciona junto con su importacion
  getTodos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.Url);
  }
  //crear producto
  crear(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.Url, producto);
  }

  getXid(id:number):Observable<Producto>{
    return this.http.get<Producto>(this.Url+'/'+id);
  }

  actualizar(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.Url+'/'+producto.id, producto);
  }

  borrar(id:number):Observable<any>{
    return this.http.delete(this.Url+'/'+id);
  }
}
