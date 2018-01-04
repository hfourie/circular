import { Component, Input} from '@angular/core';
import { HomeContentService } from '../../services/home-content.service';
import { HomeContentOption } from '../../view-models/home-content-options'

@Component({
  selector: 'app-home-content-panel',
  templateUrl: './home-content-panel.component.html',
  styleUrls: ['./home-content-panel.component.css']
})
export class HomeContentPanelComponent {

  @Input() item = <HomeContentOption>null;

  constructor() {
  }

}
