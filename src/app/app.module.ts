import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppMainComponent} from './shared/app-main/app-main.component';
import {AppToolbarComponent} from './shared/app-main/app-toolbar/app-toolbar.component';
import {SideNavComponent} from './shared/app-main/side-nav/side-nav.component';
import {routing} from './routes';
import {HttpClientModule} from '@angular/common/http';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import { LogInComponent } from './auth/log-in/log-in.component';
import { ResetComponent } from './auth/reset/reset.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {initialState} from './store/initialState';
import {rootReducer} from './store/reducers/rootReducer';
import {StoreModule} from '@ngrx/store';
import {UserService} from './user/user.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import {LocalStorageService} from './shared/services/local-storage/local-storage.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppToolbarComponent,
    SideNavComponent,
    LogInComponent,
    ResetComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    Angular2FontawesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    StoreModule.forRoot(rootReducer, {initialState}),
    routing
  ],
  providers: [UserService, AuthService, AuthGuard, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
