import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia-header',
  templateUrl: './multimedia-header.component.html',
  styleUrls: ['./multimedia-header.component.css']
})
export class MultimediaHeaderComponent {
  open = false;
  
  route: 'authenticated/settings';

  constructor() { }

  toggleOpen(): void {
    this.open = !this.open;
  }
}