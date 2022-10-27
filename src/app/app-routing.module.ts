import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SallerUpdateProductComponent } from './saller-update-product/saller-update-product.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'seller-auth', component: SellerAuthComponent
  },
  {
    path: 'seller-home', component: SellerHomeComponent,

    canActivate: [AuthGuard]
  },
  {
    path: 'seller-add-product', component: SellerAddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-update/:id', component: SallerUpdateProductComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Search/:query', component: SearchComponentComponent
  },
  {
    path: 'details/:productId', component: ProductDetailsComponent
  },
  {
    path: 'userAuth', component: UserAuthComponent
  },
  {
    path: 'cart-Page', component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
