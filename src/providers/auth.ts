import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { AdminIniPage } from '../pages/admin-ini/admin-ini';
import { ClienteIniPage } from '../pages/cliente-ini/cliente-ini';

import { HomePage } from '../pages/home/home';

@Injectable()
export class Auth {

  private autenticacao: Array<any>;
  private url: string = "http://www.temperogauchoce.com.br/temperogaucho/api/pessoas/validaLogin/credenciais?" //dsLogin=" + username + "&dsSenha=" + password;                  
  private fetchdata :any;

  constructor(public http: Http) {
    //console.log('Hello Auth Provider');
  }

  validacaoUsuario(login: string, senha: string, navCtrl: NavController, alertCtrl :AlertController, loading : LoadingController){
    this.http.get(this.url + "dsLogin=" + login + "&dsSenha=" + senha)
        .map(res => res.json())
        .subscribe(data => {
            
          let loader = loading.create({
             content: "Fazendo login..",
             duration: 800
          });
          loader.present();

           if (data == "1"){
            //Perfil Administrador
            navCtrl.setRoot(HomePage);

          }else if (data == "2") {
            //Perfil Cliente
            navCtrl.setRoot(HomePage);

          }
          else{
            let alert = alertCtrl.create({
            title:"Warning",
            subTitle:"Credenciais inválidas! Tente novamente.",
            buttons: ['OK']
          })

            alert.present();
          }
        }, error => {
          let alert = alertCtrl.create({
            title:"Warning",
            subTitle:"Credenciais inválidas! Tente novamente.",
            buttons: ['OK']
          })
          alert.present();
        });        
  }

  // fetchData(login: string, senha: string): Promise<any> {

  //   return new Promise(resolve => {

  //     this.http.get(this.url + "dsLogin=" + login + "&dsSenha=" + senha)
  //       .map(res => res.json())
  //       .subscribe(data => {

  //           this.fetchData = data;

  //           resolve(this.fetchdata);

  //         }, 
  //           err => console.log(err)
  //       );
  //   });
  // }

  // fetchData(url: string): Promise<any> {

  //   return new Promise(resolve => {

  //     this.http.get(url)
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
  //       }
  //         else{
  //           let alert = this.alert.create({
  //           title:"Warning",
  //           subTitle:"Credenciais inválidas! Tente novamente.",
  //           buttons: ['OK']
  //         })
  //         alert.present();
  //         }
  //       }, error => {
  //         let alert = this.alert.create({
  //           title:"Warning",
  //           subTitle:"Credenciais inválidas! Tente novamente.",
  //           buttons: ['OK']
  //         })

  //         alert.present();

  //       });
  //   });
  // }
}
