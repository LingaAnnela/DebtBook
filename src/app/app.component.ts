import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { AuthService } from './../services/auth';

import { HomePage } from '../pages/home/home';
import { ClientsPage } from './../pages/clients/clients';
import { SignoutPage } from './../pages/sidemenu/signout/signout';
import { SignupPage } from './../pages/sidemenu/signup/signup';
import { SigninPage } from './../pages/sidemenu/signin/signin';
import { OutgoingPage } from './../pages/sidemenu/outgoing/outgoing';
import { IncomingPage } from './../pages/sidemenu/incoming/incoming';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // @ViewChild(Nav) nav: Nav;
  @ViewChild('nav') nav: NavController;


  rootPage: any = HomePage;
  clientsPage = ClientsPage;
  incomingPage = IncomingPage;
  outgoingPage = OutgoingPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  signoutPage = SignoutPage;
  isAuthenticated = false;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private authService: AuthService) {
    
    firebase.initializeApp({
      apiKey: "AIzaSyCMrH_c5ekxs1gBuEQocJwqnOjUbcaiFJI",
      authDomain: "idebtbook.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = HomePage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = SigninPage;
      }
    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onSignout(){
    console.log('SignOut');
    
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
    
  }
}
