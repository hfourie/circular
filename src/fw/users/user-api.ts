import { Observable } from 'rxjs/Observable';
import { UserComponent } from './user.component';

export abstract class UserApi {
    signIn : (user, rememberMe: boolean) => Observable<any>;
    signOut : () => Observable<any>;
    // changePassword : 
}