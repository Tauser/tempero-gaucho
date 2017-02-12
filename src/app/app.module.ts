import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { RotasPage } from '../pages/rotas/rotas';
import { PessoaService } from '../providers/pessoa-service';
import { RotasService } from '../providers/rotas-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsuariosPage,
    RotasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsuariosPage,
    RotasPage
  ],
  //providers: [{provide: [ErrorHandler, PessoaService], useClass: IonicErrorHandler}]
  providers: [PessoaService, RotasService]
})
export class AppModule {}
