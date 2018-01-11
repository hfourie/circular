import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserComponent } from '../user.component';
import { UserApi } from '../user-api';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

  public user = new UserComponent('hardus@gmail.com','');
  public rememberMe = false;
  private show = false;

  formError: string;
  submitting = false;
  constructor(private userApi: UserApi,
              private router:Router) { }

 percentage: string
 password = 'H@lcyon60*';
 accessDenied = true;
 accessGranted = false;
 
  validate(){
    if(this.password === this.user.password){
      this.accessDenied = false; 
      this.stateChange(-1);
    }
    else{
      var x = this.password.substring(0,this.user.password.length)
      if(x === this.user.password){
        this.percentage = ""+ (this.user.password.length / this.password.length) * 100+ "%";
      }
    }
  }

   stateChange(newState) {
    var _this = this;
    setTimeout(function () {
        if (newState == -1) {

            //display logo
            //hide grant access
            _this.accessGranted = !_this.accessGranted;
        
            _this.userApi.signIn(_this.user, false)
                .subscribe((data) => {
                    this.submitting = false;
                    this.formError = data.errorMessage;
                    if(data.authenticated){
                      this.router.navigate(['/authenticated']);
                    }
                  },
                  (err)=> {
                    this.submitting = false;
                    console.log('got error: ', err);
                    this.formError = err;
                  }
                );
        }
    }, 5000);
}
  


}

