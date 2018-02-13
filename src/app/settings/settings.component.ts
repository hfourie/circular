import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as SiriWave from 'siriwavejs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }


  ngOnInit() {

    var siriWave = new SiriWave({
      container: document.getElementById('siri-container'),
      width: 300,
      height: 100,
      speed: 0.10,
	    color: '#fff',
      frequency: 7
    })

    siriWave.start();

    this.messageEvent.emit("../../assets/Themes/SettingsWallpapers/wallhaven-137410.jpg");

  }



//   <script>
// var siriWave = new SiriWave({
// 	container: document.getElementById('siri-container'),
// 	width: 640,
// 	height: 200,
	/*
	speed: 0.2,
	color: '#000',
	frequency: 2
	*/
// });
// </script>

}
