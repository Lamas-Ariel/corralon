import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioA } from '../models/modelsA/UsuarioA';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
//url puerto: ap propieties by Spring
  private urlEndPoint: string = 'http://localhost:8084/api'+'/usuario';
//obtener Todos
  getTodos():Observable<UsuarioA[]>{
    return this.http.get<UsuarioA[]>(this.urlEndPoint);
  }
//obtener x id
  getXid(id:number):Observable<UsuarioA>{
    return this.http.get<UsuarioA>(this.urlEndPoint+'/'+id);
  }
  //crear 
  crear(producto:UsuarioA):Observable<UsuarioA>{
    return this.http.post<UsuarioA>(this.urlEndPoint, producto);
  }

  //actualizar
  actualizar(UsuarioA:UsuarioA):Observable<UsuarioA>{
    return this.http.put<UsuarioA>(this.urlEndPoint+'/'+UsuarioA.id, UsuarioA);
  }
//eliminar
  borrar(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
}
