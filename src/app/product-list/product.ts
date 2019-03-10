 export interface IProduct {
    productId:number;
    Name: string;
    Code: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl:string;

} 
 export class IProduct {
     constructor(
        public Quantity: any,
     ){
        
     }
 }

