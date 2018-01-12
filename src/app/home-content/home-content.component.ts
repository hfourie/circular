import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { homeContentOptions } from '../menu-structures/home-content-options'
import { HomeContentService } from '../services/home-content.service';
import { Howl } from 'howler'
//import { SiriWave } from 'siriwavejs'

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {

  constructor(private homeContentService: HomeContentService) { 
    homeContentService.items = homeContentOptions;

  //   var sound = new Howl({
  //     src: ['../../assets/multimedia/music/Alicks-Abandoned.mp3'],
  //     loop: true,
  // volume: 0.1,
  //     html5 :true
  //   });

  //   sound.play();

  };

}

