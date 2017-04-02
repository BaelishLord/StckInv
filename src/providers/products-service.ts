import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Products } from '../models/products';
/*
  Generated class for the ProductsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductsService {
	stckApiUrl = 'http://192.168.0.110:3003/api/v1/product';

  constructor(public http: Http) {
    console.log('Hello ProductsService Provider');
  }

  load(): Observable<Products[]> {
    return this.http.get(`${this.stckApiUrl}`) 
      .map(res => <Products[]>res.json());
  }

  loadDetails(product_id: string): Observable<Products> {
    return this.http.get(`${this.stckApiUrl}/api/v1/product/${product_id}`)
      .map(res => <Products>(res.json()))
  }

   // Search for github users  
  searchUsers(searchParam: string): Observable<Products[]> {
    return this.http.get(`${this.stckApiUrl}/search/users?q=${searchParam}`) 
      .map(res => <Products[]>(res.json().items))
  }

}
