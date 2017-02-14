import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AdminIniPage } from '../admin-ini/admin-ini';
import { ClienteIniPage } from '../cliente-ini/cliente-ini';
import { LoginCadastroPage } from '../login-cadastro/login-cadastro';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  data :any;
  fetchdata :any;

  pessoas: any[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private alert :AlertController,
    private loading : LoadingController) {


    this.data = {};
    this.data.username = "";
    this.data.password = "";

  }

  login(){
      let username = this.data.username;
      let password = this.data.password;
      let data = JSON.stringify({username, password});
      //let link = "http://www.temperogauchoce.com.br/temperogaucho/api/pessoas"
      //let link = "http://localhost/temperogaucho/api/pessoas/validaLogin/credenciais?dsLogin=" + username + "&dsSenha=" + password;
      let link = "http://www.temperogauchoce.com.br/temperogaucho/api/pessoas/validaLogin/credenciais?dsLogin=" + username + "&dsSenha=" + password;
      //let link = "http://localhost:8050/temperogaucho/api/Example";
      console.log(link);

      this.http.get(link)
        .map(res => res.json())
        .subscribe(data =>{

          //let loader = this.loading.create({
          //    content: "Checando ! Por favor espere..",
          //    duration: 1000
          //});
          //loader.present();

          this.fetchdata = data;

          //Redireciona usuário de acordo com perfil
          if (data == "1"){
            //Perfil Administrador
            this.navCtrl.setRoot(AdminIniPage);

          }else if (data == "2") {
            //Perfil Cliente
            this.navCtrl.setRoot(ClienteIniPage);

        }
          else{
            let alert = this.alert.create({
            title:"Aviso",
            subTitle:"Credenciais inválidas! Tente novamente.",
            buttons: ['OK']
          })
          alert.present();
          }
        }, error => {
          let alert = this.alert.create({
            title:"Aviso",
            subTitle:"Credenciais inválidas! Tente novamente.",
            buttons: ['OK']
          })
          alert.present();
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  cadastro() {
    this.navCtrl.push(LoginCadastroPage);
  }

}
