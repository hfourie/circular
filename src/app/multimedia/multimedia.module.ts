import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MultimediaContainerComponent } from '../multimedia/multimedia-container/multimedia-container.component';
import { MultimediaContentComponent } from '../multimedia/multimedia-content/multimedia-content.component';
import { MultimediaHeaderComponent } from '../multimedia/multimedia-header/multimedia-header.component';
import { MultimediaSearchBarComponent } from '../multimedia/multimedia-search-bar/multimedia-search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MultimediaContainerComponent,
    MultimediaContentComponent,
    MultimediaHeaderComponent,
    MultimediaSearchBarComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MultimediaContainerComponent,
    MultimediaContentComponent,
    MultimediaHeaderComponent,
    MultimediaSearchBarComponent,

  ]
})
export class MultimediaModule { }
