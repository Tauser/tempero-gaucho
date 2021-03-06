import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { RotasPage } from '../pages/rotas/rotas';

import { LoginPage } from '../pages/login/login';
import { AdminIniPage } from '../pages/admin-ini/admin-ini';
import { ClienteIniPage } from '../pages/cliente-ini/cliente-ini';
import { Auth } from '../pproviders/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  adminPages: Array<{title: string, component: any}>;
  clientPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    
    //Lista paginas admin
    this.adminPages = [
      { title: 'Home', component: HomePage },
      { title: 'Usuarios', component: UsuariosPage },
      { title: 'Rotas', component: RotasPage}
    ];

    //Lista paginas cliente
    this.clientPages = [
      { title: 'Cliente', component: ClienteIniPage }
    ];    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut(){

    this.nav.setRoot(LoginPage);

  }
}
