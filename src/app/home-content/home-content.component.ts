import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { homeContentOptions } from '../menu-structures/home-content-options'
import { HomeContentService } from '../services/home-content.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {

  constructor(private homeContentService: HomeContentService) { 
    homeContentService.items = homeContentOptions;
  };

}

