import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AppMainComponent} from './shared/app-main/app-main.component';
import {LogInComponent} from './auth/log-in/log-in.component';
import {ResetComponent} from './auth/reset/reset.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    // canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'auth',
    // canActivate: [PreventLoggedInAccessGuard],
    children: [
      {path: 'login', component: LogInComponent},
      {path: 'reset', component: ResetComponent},
      {path: 'sign-up', component: SignUpComponent}
    ]
  }
];

export const routing = RouterModule.forRoot(appRoutes);
