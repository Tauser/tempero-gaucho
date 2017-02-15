import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AdminIniPage } from '../admin-ini/admin-ini';
import { ClienteIniPage } from '../cliente-ini/cliente-ini';
import { Auth } from '../../providers/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  data :any;
  fetchdata :any;

  pessoas: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
   private alert :AlertController, private loading : LoadingController, public authService: Auth   ) {

    this.data = {};
    this.data.username = "";
    this.data.password = "";
    
  }

  login(){
      let username = this.data.username;
      let password = this.data.password;
      // let data = JSON.stringify({username, password});          

      this.authService.validacaoUsuario(username, password, this.navCtrl, this.alert, this.loading);       
    
  }


  //----------- LOGIN OK -----
  // login(){
  //     let username = this.data.username;
  //     let password = this.data.password;
  //     // let data = JSON.stringify({username, password});    
  //     let link = "http://www.temperogauchoce.com.br/temperogaucho/api/pessoas/validaLogin/credenciais?dsLogin=" + username + "&dsSenha=" + password;                  

  //     this.http.get(link)
  //       .map(res => res.json())
  //       .subscribe(data =>{

  //         //let loader = this.loading.create({
  //         //    content: "Checando ! Por favor espere..",
  //         //    duration: 1000
  //         //});
  //         //loader.present();

  //         this.fetchdata = data;

  //         //Redireciona usuário de acordo com perfil
  //         if (data == "1"){
  //           //Perfil Administrador
  //           this.navCtrl.setRoot(AdminIniPage);

  //         }else if (data == "2") {
  //           //Perfil Cliente
  //           this.navCtrl.setRoot(ClienteIniPage);

  //         }
  //         else{
  //           let alert = this.alert.create({
  //           title:"Warning",
  //           subTitle:"Credenciais inválidas! Tente novamente.",
  //           buttons: ['OK']
  //         })

  //           alert.present();
  //         }
  //       }, error => {
  //         let alert = this.alert.create({
  //           title:"Warning",
  //           subTitle:"Credenciais inválidas! Tente novamente.",
  //           buttons: ['OK']
  //         })
  //         alert.present();
  //       });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
