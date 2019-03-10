import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule, } from '@angular/forms';
import { StarComponent } from './product-list/star/star.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    CongratulationsComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'Products', component: ProductListComponent},
      { path:'Congratulations', component:CongratulationsComponent},
      { path:'ShoppingCart',component:ShoppingCartComponent},
      {path:'**',component: PageNotFoundComponent}

    ]),
    FormsModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
