import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacturaA } from '../models/modelsA/FacturaA';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http:HttpClient) { }
//url puerto: ap propieties by Spring
  private urlEndPoint: string = 'http://localhost:8084/api'+'/factura';
//obtener Todos
  getTodos():Observable<FacturaA[]>{
    return this.http.get<FacturaA[]>(this.urlEndPoint);
  }
//obtener x id
  getXid(id:number):Observable<FacturaA>{
    return this.http.get<FacturaA>(this.urlEndPoint+'/'+id);
  }
  //crear 
  crear(producto:FacturaA):Observable<FacturaA>{
    return this.http.post<FacturaA>(this.urlEndPoint, producto);
  }

  //actualizar
  actualizar(FacturaA:FacturaA):Observable<FacturaA>{
    return this.http.put<FacturaA>(this.urlEndPoint+'/'+FacturaA.id, FacturaA);
  }
//eliminar
  borrar(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
}
