import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserComponent } from '../user.component';
import { UserApi } from '../user-api';
import { Howl } from 'howler'

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

  public user = new UserComponent('hardus@gmail.com','H@lcyon60*');
  // public user = new UserComponent('hardus@gmail.com','');
  public rememberMe = false;
  private show = false;

  constructor(private userApi: UserApi, private router:Router) { 

    userApi.signIn(this.user, false)
    .subscribe((data) => {
    this.router.navigate(['/authenticated']);
    },
    (err)=> {
    }
    );

    };

//  percentage: string
//  password = 'H@lcyon60*';
//  accessGranted = false;
//  processing = false;
//  login = true;
 
//   validate(){

//     var sound = new Howl({
//       src: ['../../../assets/Themes/Sounds/water-drop-1.wav'],
//       loop: false,
//       volume: 0.1,
//       html5 :true
//     });
//     sound.stop();
//     sound.play();

//     if(this.password === this.user.password){
//       var _this = this;
//       this.stateChange(-1, this);
//     }
//     else{
//       var x = this.password.substring(0,this.user.password.length)
//       if(x === this.user.password){
//         this.percentage = ""+ (this.user.password.length / this.password.length) * 100+ "%";
//       }
//     }
//   }

//    stateChange(newState, _this) {
//     setTimeout(function () {
//         if (newState == -1) {
//           _this.login = false;
//             _this.processing = true;
//             _this.userApi.signIn(_this.user, false)
//                 .subscribe((data) => {
//                   _this.accessGranted = true;
//                   _this.processing = false;
//                   setTimeout(function () {
//                     _this.router.navigate(['/authenticated']);
//                   }, 1000);

                      
//                   },
//                   (err)=> {
//                   }
//                 );
//         }
//     }, 1);
// }
  


}

