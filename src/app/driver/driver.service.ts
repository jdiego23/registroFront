import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './driver';

const urlApi = 'http://localhost:8081/api/driver';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Driver> {
    return this.http.get<Driver>(urlApi);
  }

  add(driver: Driver) {
    return this.http.post<Driver>(urlApi, driver);
  }
}