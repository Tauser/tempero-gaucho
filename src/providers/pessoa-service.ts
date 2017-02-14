import { Injectable } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { Response, Headers, RequestOptions} from "@angular/http";


import { Pessoa } from "../model/pessoa";

@Injectable()
export class PessoaService {

  private pessoas: Array<any>;
  private pes: Pessoa;

  public url: string = "http://www.temperogauchoce.com.br/temperogaucho/api/pessoa/";

  constructor(public http: Http) {}

  fetchData(url: string): Promise<any> {

    return new Promise(resolve => {
      this.http.get(url).map(res => res.json())
    });
  }


  //INSERE
/*
  insere(p: Pessoa, url:string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify(p);
    this.http.post(url, data, headers)
      .map((res: Response) => res.json(),
       error => {
            console.log("Oooops!");
        });
  }
  */
  insere(pessoa) {
      this.pes = pessoa;
      this.pes.tpPerfil=2;
      this.pes.idRota = Number(this.pes.idRota);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(this.pes);
      return this.http.post(this.url, body, headers).map((res: Response) => res.json());
  }

  update(pessoa) {
      //let headers = new Headers({ 'Content-Type': 'application/json' });
      //let options = new RequestOptions({ headers: headers });
      //let body = JSON.stringify(pessoa);
      //return this.http.put(this.url + id, body, headers).map((res: Response) => res.json());
  }

  delete(pessoa_id) {
      //return this.http.delete(this.url + food_id);
  }


}
