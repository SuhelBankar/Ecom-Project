import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, order } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit {
  totalPrice: number | undefined;
  cartData: cart[] | undefined;
  orderMsg: string | undefined;
  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.product.currentCart().subscribe((result) => {
      let price = 0;
      this.cartData = result
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+ item.price * + item.quantity)
        }
      })
      this.totalPrice = price + (price / 10) + 100 - (price / 10);


    })
  }
  orderNow(data: { email: string, address: string, contact: string }) {
    // console.log(data)
    let user = localStorage.getItem('user')
    let userId = user && JSON.parse(user).userId

    if (this.totalPrice) {
      let orderData: order = {
        ...data,
        totalprice: this.totalPrice,
        userId,
        id: undefined,
        image: ''
      }
      this.cartData?.forEach((item) => {
        setTimeout(() => {
          item.id && this.product.deleteCartItems(item.id);

        }, 800)
      })
      this.product.orderNow(orderData).subscribe((result) => {
        if (result) {
          // alert('order placed')
          this.orderMsg = "Your order is placed"
          // this.router.navigate(['/my-orders'])
          setTimeout(() => {
            this.router.navigate(['/my-orders'])
            this.orderMsg = undefined;
          }, 4000)

        }
      })

    }
  }

}
