import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  addproductMessage: string | undefined;
  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {

  }
  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.log(result)
      if (result) {
        this.addproductMessage = "product is succesfully added"
      }
      setTimeout(() =>
      (this.addproductMessage = undefined,
        this.router.navigate(['seller-home'])
      ), 3000);
    })

  }

}
