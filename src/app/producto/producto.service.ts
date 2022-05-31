import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

const urlApi = 'http://localhost:8081/api/productos';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Producto> {
    return this.http.get<Producto>(urlApi);
  }

  add(producto: Producto) {
    return this.http.post<Producto>(urlApi, producto);
  }
}



