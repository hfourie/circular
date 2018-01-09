//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FwModule } from '../fw/fw.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeContentComponent} from './home-content/home-content.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

//Routes
import { appRoutes } from './app.routing';

//API
import { UserApi } from '../fw/users/user-api';

//Services
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { HomeContentService } from './services/home-content.service'

//PANELS
import { HomeContentPanelComponent } from './panels/home-content-panel/home-content-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HomeContentComponent,
    AuthenticatedUserComponent,
    HomeContentPanelComponent,
    ImagePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    MultimediaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AppDataService,
    HomeContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
