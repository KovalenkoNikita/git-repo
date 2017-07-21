import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  public getData() {
    return this.http.get('./assets/products.json');
  }

  public getRoutes() {
    return this.http.get('./assets/routes.json');
  }

  public getFilters() {
    return this.http.get('./assets/filters.json');

  }
}
