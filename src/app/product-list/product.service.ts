import {Injectable} from '@angular/core';
import {IProduct} from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  
  static imageUrl: boolean;
  public addItem: any;
  public productList: any = [];
  public myHttpCall: any = this._http.get('/assets/products.json');

  constructor(private _http: HttpClient) {}

  getProducts(): IProduct[] {
      return this.productList;
  }

}