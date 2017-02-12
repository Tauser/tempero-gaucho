import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PessoaService } from '../../providers/pessoa-service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html'
})
export class UsuariosPage {

  public pessoas: Array<any>;
  //private url: string = "http://www.temperogauchoce.com.br/temperogaucho/api/pessoas";
  public url: string="http://localhost/temperogaucho/api/pessoas";

  public hasFilter: boolean = false;
  public noFilter: Array<any>;
  public searchTerm: string = '';
  public searchTermControl: FormControl;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public pessoaService: PessoaService  ) {
    this.fetchContent();

    this.searchTermControl = new FormControl();
    this.searchTermControl.valueChanges.debounceTime(1000).distinctUntilChanged().subscribe(search => {
      if (search !== '' && search) {
        this.filterItems();
      }
    })
  }

  //Metodo para carregar dados dos clientes
  fetchContent ():void {
    let loading = this.loadingCtrl.create({
      content: 'carregando ...'
    });

    loading.present();

    this.pessoaService.fetchData(this.url).then(data => {
      this.pessoas = data;
      this.noFilter = this.pessoas;
      loading.dismiss();
    });

  }
  //Metodo de Refresh de conteudo
  doRefresh(refresher) {
    this.pessoaService.fetchData(this.url).then(data => {
      this.pessoas = data;
      this.noFilter = this.pessoas;
      this.hasFilter = false;
      refresher.complete();
    });

  }

  filterItems() {
    this.hasFilter = false;
    this.pessoas = this.noFilter.filter((item) => {
        return item.nmPessoa.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }


}
