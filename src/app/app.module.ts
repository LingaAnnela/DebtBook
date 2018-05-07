import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { AuthService } from './../services/auth';
import { ClientService } from './../services/client.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientsPage } from '../pages/clients/clients';
import { ClientInfoPage } from './../pages/clients/client-info/client-info';
import { ManageClientPage } from './../pages/clients/manage-client/manage-client';
import { SignoutPage } from './../pages/sidemenu/signout/signout';
import { SignupPage } from './../pages/sidemenu/signup/signup';
import { SigninPage } from './../pages/sidemenu/signin/signin';
import { OutgoingPage } from './../pages/sidemenu/outgoing/outgoing';
import { IncomingPage } from './../pages/sidemenu/incoming/incoming';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientsPage,
    ClientInfoPage,
    ManageClientPage,
    IncomingPage,
    OutgoingPage,
    SigninPage,
    SignupPage,
    SignoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientsPage,
    ClientInfoPage,
    ManageClientPage,
    IncomingPage,
    OutgoingPage,
    SigninPage,
    SignupPage,
    SignoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ClientService
  ]
})
export class AppModule {}
