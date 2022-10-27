import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularProduct: undefined | product[]
  trendyProduct: undefined | product[]
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((result) => {
      console.log(result);

      this.popularProduct = result;
    });
    this.product.trendyProducts().subscribe((res) => {
      this.trendyProduct = res;
    })
  }



}
