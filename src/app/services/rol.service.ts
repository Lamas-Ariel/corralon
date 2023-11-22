import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolA } from '../models/modelsA/RolA';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient) { }
//url puerto: ap propieties by Spring
private urlEndPoint: string = 'http://localhost:8084/api'+'/rol';
//obtener Todos
  getTodos():Observable<RolA[]>{
    return this.http.get<RolA[]>(this.urlEndPoint);
  }
//obtener x id
  getXid(id:number):Observable<RolA>{
    return this.http.get<RolA>(this.urlEndPoint+'/'+id);
  }
  //crear 
  crear(producto:RolA):Observable<RolA>{
    return this.http.post<RolA>(this.urlEndPoint, producto);
  }

  //actualizar
  actualizar(RolA:RolA):Observable<RolA>{
    return this.http.put<RolA>(this.urlEndPoint+'/'+RolA.id, RolA);
  }
//eliminar
  borrar(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
}
