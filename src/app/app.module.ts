import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SallerUpdateProductComponent } from './saller-update-product/saller-update-product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SallerUpdateProductComponent,
    SearchComponentComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    CartPageComponent,
    CartCheckoutComponent,
    MyOrdersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    CarouselModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
