import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-saller-update-product',
  templateUrl: './saller-update-product.component.html',
  styleUrls: ['./saller-update-product.component.scss']
})
export class SallerUpdateProductComponent implements OnInit {
  productData: product | undefined
  updateproductMessage: string | undefined
  constructor(private route:ActivatedRoute , private product:ProductService , private router:Router) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.log(productId);
   productId &&  this.product.getProduct(productId).subscribe((data)=>{
      console.log(data)
      this.productData = data
    })
  }
  submit(data:product):void{
    console.log(data)
    if(this.productData){
      data.id = this.productData.id ;
    }
    this.product.updateProduct(data).subscribe((result)=>{

      if(result){
          this.updateproductMessage = "product has updated"
      }
      setTimeout(() => 
      (this.updateproductMessage = undefined,
      this.router.navigate(['seller-home']))
      ,3000);

    })
  
  }
}
