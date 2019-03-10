import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  pageTitle: string = 'SHOPPING CART';
  showImage: boolean = true;
  total: number;
  runningValue: any;
  Quantity:any;


  public addProductToCart (product:IProduct):void {
    this.productService.addItem
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product '  + message;
  }
  
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.productService.productList;
  }
  filteredProducts: IProduct[];
  

  constructor(public productService: ProductService,
  ) {

  }

  protect(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  calculateTotal() {
    this.total = this.productService.productList.reduce(function (runningValue: any, p: IProduct) {
     return runningValue + (p.price * p.Quantity);
    }, 0);
    // let total = 0;
    // this.products.forEach(product => {
    //   total = total + (product.Quantity * product.price);
    // });
    // this.total = total;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productService.productList.filter((product: IProduct) =>
      product.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  public ngOnInit() {
    this.productService.myHttpCall.subscribe(resp => {
      this.filteredProducts = resp['groceries'];
    });
    
    // setInterval(() => {
    //   console.log('a', this.productService.productList);
    // }, 2000);
    //this.total = this.products.reduce(function (runningValue: any, products: IProduct) {
     // runningValue = runningValue + (products.price * uantity.value);
    //}, 0);
    this.calculateTotal();
  }

}
