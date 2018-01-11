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

  public user = new UserComponent('','');
  public rememberMe = false;
  private show = false;

  formError: string;
  submitting = false;
  
  constructor(private userApi: UserApi,
              private router:Router) { }

  onSubmit(signInForm: NgForm) {
    
    if (signInForm.valid) {

      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(this.user, this.rememberMe)
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

  }

}

