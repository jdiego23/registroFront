import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

const urlApi = 'http://localhost:8081/api/login';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }


  login(login: Login) {
    return this.http.post<Login>(urlApi, login);
  }
}