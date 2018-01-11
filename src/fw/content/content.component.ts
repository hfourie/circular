import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle } from '@angular/platform-browser';
import {Observable} from 'rxjs/Rx';

//USE THIS FOR MENU LAYOUT AND RESPONSIVE DESIGN
// import { MenuService } from '../services/menu.service';
// import { ScreenService } from '../services/screen.service';




@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //USE THIS FOR MENU LAYOUT AND RESPONSIVE DESIGN
  // constructor(private menuService: MenuService,
  //             private screenService: ScreenService) { }

   wallpapers = [
    '../../assets/Themes/Background.jpg',
    '../../assets/Themes/wallhaven-152793.jpg',
    '../../assets/Themes/wallhaven-329291.jpg',
    '../../assets/Themes/wallhaven-347980.jpg',
    '../../assets/Themes/wallhaven-607612.png',
    '../../assets/Themes/wallhaven-607694.png'
  ];

   imageUrl = '../../assets/Themes/Background.jpg';
   backgroundImg: SafeStyle;
  constructor(private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    let timer = Observable.timer(1000,10000);
    var _this = this;
    timer.subscribe(function(){
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      let wallpaperIndex = getRandomInt(0, _this.wallpapers.length - 1);
      _this.backgroundImg = _this._sanitizer.bypassSecurityTrustStyle('url(' + _this.wallpapers[wallpaperIndex] + ')');
    });
  }
}
