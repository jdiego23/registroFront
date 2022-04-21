import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modulo } from './modulo';

const urlApi = 'http://localhost:8081/api/modulo';
@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Modulo> {
    return this.http.get<Modulo>(urlApi);
  }

  add(module: Modulo) {
    return this.http.post<Modulo>(urlApi, module);
  }
}