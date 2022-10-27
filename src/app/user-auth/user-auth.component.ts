import { visitAll } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { cart, Login, product, Signup } from '../data-type';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  authErrror: string = '';
  constructor(private user: UsersService, private product: ProductService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  Signup(data: Signup) {
    this.user.userSignup(data)
    // console.log(this.user)
  }

  userLogin(data: Login) {
    // console.log(data)
    this.user.userLogin(data)
    this.user.invaliduserAuth.subscribe((res) => {
      console.log("fuckers", res);
      if (res) {
        this.authErrror = "Please enter valid user details";
      }
      else {
        this.localCartToRemoteCart()
      }
    })
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignup() {
    this.showLogin = false;
  }
  localCartToRemoteCart() {
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user')
    let userId = user && JSON.parse(user).id;
    if (data) {
      let cartDatalist = JSON.parse(data);

      cartDatalist.forEach((product: product, index: any) => {
        let cartData: cart = {
          ...product,
          productId: product.id,
          userId
        };
        delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.log('item stored in json')
            }
          })
          if (cartDatalist.length === index + 1) {
            localStorage.removeItem('localCart')
          }
        }, 1000);
      });
    }
    setTimeout(() => {
      this.product.getCartList(userId)

    }, 2000);
  }
}
