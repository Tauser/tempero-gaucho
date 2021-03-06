import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { PessoaService} from "../../providers/pessoa-service";
import { Pessoa } from "../../model/pessoa";
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'page-login-cadastro',
  templateUrl: 'login-cadastro.html'
})
export class LoginCadastroPage {

  pessoa:Pessoa;
  public url: string = "http://www.temperogauchoce.com.br/temperogaucho/api/pessoa/";
  //public url: string="http://localhost/temperogaucho/api/pessoas";

  constructor(public navCtrl: NavController,
              public pessoaService: PessoaService) {
    this.pessoa = new Pessoa();
  }


  registrar() {
    let pessoa = this.pessoa;
    this.pessoaService.insere(pessoa).subscribe(
       data => {
         return true;
       },
       error => {
         console.error("Erro ao cadastrar Usuario!");
         return Observable.throw(error);
       }
    );
  }

}
