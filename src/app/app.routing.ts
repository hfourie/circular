import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { HomeContentComponent } from './home-content/home-content.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';

export const appRoutes: Routes = [  
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'home-content', pathMatch: 'full' },
          { path: 'home-content', component: HomeContentComponent },
          { path: 'settings', component: SettingsComponent },
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];