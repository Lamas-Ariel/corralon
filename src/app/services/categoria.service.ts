import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaA } from '../models/modelsA/CategoriaA';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }
private urlEndPoint: string = 'http://localhost:8084/api'+'/categoria';
  //obtener Todos
  getTodos():Observable<CategoriaA[]>{
 return this.http.get<CategoriaA[]> (this.urlEndPoint);}

//obtener x id
getXid(id:number):Observable<CategoriaA>{
  return this.http.get<CategoriaA>(this.urlEndPoint+'/'+id);
}
//crear 
crear(producto:CategoriaA):Observable<CategoriaA>{
  return this.http.post<CategoriaA>(this.urlEndPoint, producto);
}

//actualizar
actualizar(CategoriaA:CategoriaA):Observable<CategoriaA>{
  return this.http.put<CategoriaA>(this.urlEndPoint+'/'+CategoriaA.id, CategoriaA);
}
//eliminar
borrar(id:number):Observable<any>{
  return this.http.delete(this.urlEndPoint+'/'+id);
}
}
