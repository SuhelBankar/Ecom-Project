import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService, private router: Router) { }
  showlogin = false;
  authError: string = '';
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  Signup(data: Signup): void {
    console.log(data)
    this.seller.userSignup(data)

    // .subscribe((result)=>{
    //   if(result){
    //     this.router.navigate(['seller-home'])
    //   }
    // console.log(result)
    // })
    // }
  }
  Login(data: Signup): void {
    this.authError = ""
    console.log(data)
    this.seller.userLogin(data)
    this.seller.isLogginErrror.subscribe((error) => {
      if (error) {
        this.authError = "Email or password is not correct"
      }
    })
  }
  openLogin() {
    this.showlogin = true
  }
  openSignup() {
    this.showlogin = false
  }
}
