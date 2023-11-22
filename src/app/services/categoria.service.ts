import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
private urlEndPoint: string = 'http://localhost:8084/api'+'/categoria';
  constructor(private http: HttpClient) { }

  getTodos():Observable<Categoria[]>{
 return this.http.get<Categoria[]> (this.urlEndPoint);}






}
