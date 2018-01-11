import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';
import { UserComponent } from '../../fw/users/user.component';
import { retry } from 'rxjs/operators/retry';

var users = [
  new UserComponent('hardus@gmail.com','H@lcyon60*'),
  new UserComponent('admin1','admin1'),
  new UserComponent('1','1')
];

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = false;
  error = "";
  constructor(private router: Router) { }

  signIn(user, rememberMe:boolean): Observable<any> {
    
    let authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      console.log('UserService.signIn: ' + authenticatedUser.username + ' ' + authenticatedUser.password + ' ' + rememberMe);
      localStorage.setItem("user", authenticatedUser.username);
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
      this.error = "Supplied username and password is not recognised"
    }
    return Observable.of({
      authenticated:this.isAuthenticated,
      errorMessage: this.error
    }).delay(4000);
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));
  }

  signOut(): Observable<any> {
      this.isAuthenticated = false;
      this.router.navigate(['/signin']);
      return Observable.of({});
  }

}