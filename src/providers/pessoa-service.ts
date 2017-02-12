import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PessoaService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PessoaService {

  //public pessoas: Array<string>;
  private pessoas: Array<any>;
  //private url: string = "http://www.temperogauchoce.com.br/temperogaucho/api/pessoas";
  //private url: string="http://localhost/temperogaucho/api/pessoas";

  constructor(public http: Http) {}

  fetchData(url: string): Promise<any> {

    return new Promise(resolve => {

      this.http.get(url).map(res => res.json())
        .subscribe(data => {
          this.pessoas = data.rows;
          console.log(this.pessoas);
          //this.pessoas = data.data.children;
          /*this.pessoas.forEach((e, i, a) => {
            if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1 ) {
              e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
            }
          })*/
          resolve(this.pessoas);
        }, err => console.log(err));
    });
  }

}
