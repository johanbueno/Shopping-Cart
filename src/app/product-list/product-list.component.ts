import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number =50;
  imageMargin: number = 2;
  showImage: boolean =false;
  listFilter:string ='coconut';
  products: any[]=
  [
    {
      "productId": 1,
      "productName": "Banana",
      "productCode": "0011",
      "description": "Organic Banana from Colombia",
      "price": 1,
      "starRating": 3.2,
      "imageUrl":'./assets/images/banana.jpg'

    },
    {
      "productId": 2,
      "productName": "Apple",
      "productCode": "0023",
      "description": "Organic Apples from Costa Rica",
      "price": 2,
      "starRating": 4.2,
      "imageUrl": './assets/images/Apple.jpeg'
    },
    {
      "productId": 5,
      "productName": "Coconut",
      "productCode": "0048",
      "description": "Organic Coconut from Brazil",
      "price": 3.5,
      "starRating": 4.8,
      "imageUrl": './assets/images/coconut.jpeg'
    },
    {
      "productId": 8,
      "productName": "Kiwi",
      "productCode": "0022",
      "description": "Organic Kiwi from USA",
      "price": 2.50,
      "starRating": 3.7,
      "imageUrl": './assets/images/kiwi.jpeg'
    },
    {
      "productId": 10,
      "productName": "Grape",
      "productCode": "0042",
      "description": "Organic Grapes from California / USA",
      "price": 5.95,
      "starRating": 4.6,
      "imageUrl": './assets/images/grapes.jpeg'
    },
    
  ]
  toggleImage(): void{
    this.showImage =!this.showImage;
  }
  
  constructor() { }

  ngOnInit() {
    
  }

}
