import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemA } from '../models/modelsA/ItemA';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
//url puerto: ap propieties by Spring
  private urlEndPoint: string = 'http://localhost:8084/api'+'/itam';
//obtener Todos
  getTodos():Observable<ItemA[]>{
    return this.http.get<ItemA[]>(this.urlEndPoint);
  }
//obtener x id
  getXid(id:number):Observable<ItemA>{
    return this.http.get<ItemA>(this.urlEndPoint+'/'+id);
  }
  //crear 
  crear(producto:ItemA):Observable<ItemA>{
    return this.http.post<ItemA>(this.urlEndPoint, producto);
  }

  //actualizar
  actualizar(ItemA:ItemA):Observable<ItemA>{
    return this.http.put<ItemA>(this.urlEndPoint+'/'+ItemA.id, ItemA);
  }
//eliminar
  borrar(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
}
