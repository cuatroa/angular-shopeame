import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ShopeameService {

  products = [];

  constructor(private http: HttpClient) {}

  baseURL: string = 'http://localhost:3000/';
  
  getProducts() {
    return this.http.get(this.baseURL + 'products');

  }
}
