import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: product[] | undefined
  userName: string = "";
  cartItem = 0;
  constructor(private route: Router, private product: ProductService) { }

  ngOnInit(): void {

    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          // console.log('in seller area')
          let sellerStore = localStorage.getItem('seller');
          let sellerData = (sellerStore && JSON.parse(sellerStore));
          this.sellerName = sellerData.Name;
          this.menuType = 'seller'
        }
        else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
          this.product.getCartList(userData.id)
        }
        else {
          console.log('out side seller')
          this.menuType = 'default'
        }


      }


    })
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItem = JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items) => {
      this.cartItem = items.length
    })
  }
  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
  userlogout() {
    localStorage.removeItem('user');
    this.route.navigate(['/userAuth']);
    this.product.cartData.emit([])
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const el = query.target as HTMLInputElement
      // console.log(el.value)
      this.product.searchProducts(el.value).subscribe((res) => {
        this.searchResult = res;
        if (res.length > 5) {
          res.length = 5;

        }
      })

    }
  }
  searchHide() {
    this.searchResult = undefined;
  }
  submitSearch(val: string) {
    // console.log(val)
    this.route.navigate([`/Search/${val}`])
  }
  redirctToDetails(id: number) {
    this.route.navigate(['/details/' + id]);


  }

}



