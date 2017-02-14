import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { RotasPage } from '../pages/rotas/rotas';
import { PessoaService } from '../providers/pessoa-service';
import { RotasService } from '../providers/rotas-service';

import { LoginPage } from '../pages/login/login';
import { LoginCadastroPage } from '../pages/login-cadastro/login-cadastro';
import { AdminIniPage } from '../pages/admin-ini/admin-ini';
import { ClienteIniPage } from '../pages/cliente-ini/cliente-ini';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsuariosPage,
    RotasPage,
    LoginPage,
    AdminIniPage,
    ClienteIniPage,
    LoginCadastroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsuariosPage,
    RotasPage,
    LoginPage,
    AdminIniPage,
    ClienteIniPage,
    LoginCadastroPage
  ],
  //providers: [{provide: [ErrorHandler, PessoaService], useClass: IonicErrorHandler}]
  providers: [PessoaService, RotasService]
})
export class AppModule {}
