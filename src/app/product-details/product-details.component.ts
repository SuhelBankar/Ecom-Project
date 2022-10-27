import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | product
  quantity: number = 1
  productQuantity: number = 1;
  removeCart: boolean = false;
  removrCartData: product | undefined;
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((result) => {
      console.log(result)
      this.productData = result

      let cartData = localStorage.getItem('localCart');
      if (productId && cartData) {
        let items = JSON.parse(cartData);
        items = items.filter((item: product) => productId == item.id.toString())
        if (items.length) {
          this.removeCart = true;
        }
        else {
          this.removeCart = false;
        }
      }
      let user = localStorage.getItem('user')

      if (user) {
        let userId = user && JSON.parse(user).id
        this.product.getCartList(userId);
        this.product.cartData.subscribe((result) => {
          let item = result.filter((items: product) => productId?.toString() === items.productId?.toString())
          if (item.length) {
            this.removrCartData = item[0];
            this.removeCart = true;
          }
        })


      }
    })
  }
  handdleQuantity(value: string) {
    if (this.productQuantity < 20 && value == 'plus') {
      this.productQuantity += 1;

      // this.productQuantity = this.productQuantity +1
    }
    if (this.productQuantity > 1 && value == 'min') {
      this.productQuantity -= 1
    }

  }
  addToCard() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        // console.log(this.productData);
        this.product.localAddCard(this.productData);
        this.removeCart = true;


      }
      else {
        console.log("user logged in")
        let user = localStorage.getItem('user')
        let userId = user && JSON.parse(user).id
        console.log(userId)
        let cartData: cart = {

          ...this.productData, userId,
          productId: this.productData.id,
        }
        // console.log(cartData)
        delete cartData.id;
        console.log(cartData);
        this.product.addToCart(cartData).subscribe((result) => {
          // console.log(result)
          if (result) {
            // alert('product is added in cart')
            this.product.getCartList(userId);
            this.removeCart = true
          }
        })
      }

    }
  }
  removeToCard(productId: number) {
    if (!localStorage.getItem('user')) {
      this.product.removeItemCart(productId);
    }
    else {
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
      this.removrCartData && this.product.removeToCart(this.removrCartData.id).
        subscribe((result) => {
          if (result) {
            this.product.getCartList(userId);
          }
        })
      // console.log(this.removrCartData)
    }
    this.removeCart = false;

  }
}


