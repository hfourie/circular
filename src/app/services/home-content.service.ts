
import { Injectable } from '@angular/core';
import { HomeContentOption } from '../view-models/home-content-options'

@Injectable()
export class HomeContentService {
  items: Array<HomeContentOption>;
}