import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
  })
  export class WelcomePage {
  
    constructor() {
  
       var sound = new Howl({
        src: ['http://server8.mp3quran.net/ahmad_huth/001.mp3'],
        html5 :true
      });
  
      sound.play();
  
     }
  
     
   
  }