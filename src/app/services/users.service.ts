import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Signup } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }
  invaliduserAuth = new EventEmitter<boolean>(false);
  userSignup(user: Signup) {
    this.http.post(`http://localhost:3000/users`, user, { observe: 'response' }).subscribe((result) => {
      // console.log(result)

      if (result) {
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
    })

  }
  userLogin(data: Login) {
    return this.http.get<Signup[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((res) => {
        if (res && res.body?.length) {
          this.invaliduserAuth.emit(false)
          // console.log(res)
          localStorage.setItem('user', JSON.stringify(res.body[0]))
          this.router.navigate(['/']);
        }
        else {
          this.invaliduserAuth.emit(true)
        }
      })
  }
  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/'])
    }
  }
}
