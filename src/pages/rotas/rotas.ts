import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RotasService } from '../../providers/rotas-service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'page-rotas',
  templateUrl: 'rotas.html'
})
export class RotasPage {

  public rotas: Array<any>;
  //private url: string = "http://www.temperogauchoce.com.br/temperogaucho/api/rotas";
  public url: string="http://localhost/temperogaucho/api/rotas";

  public hasFilter: boolean = false;
  public noFilter: Array<any>;
  public searchTerm: string = '';
  public searchTermControl: FormControl;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public rotasService: RotasService  ) {
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

    this.rotasService.fetchData(this.url).then(data => {
      this.rotas = data;
      this.noFilter = this.rotas;
      loading.dismiss();
    });
  }

  //Metodo de Refresh de conteudo
  doRefresh(refresher) {
    this.rotasService.fetchData(this.url).then(data => {
      this.rotas = data;
      this.noFilter = this.rotas;
      this.hasFilter = false;
      refresher.complete();
    });
  }

  filterItems() {
    this.hasFilter = false;
    this.rotas = this.noFilter.filter((item) => {
        return item.dsRota.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }


}
