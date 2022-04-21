import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

const urlApi = 'http://localhost:8081/api/clientes';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Cliente> {
    return this.http.get<Cliente>(urlApi);
  }

  add(usuario: Cliente) {
    return this.http.post<Cliente>(urlApi, usuario);
  }
}
