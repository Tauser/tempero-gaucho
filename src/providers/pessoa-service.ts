import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Response, Headers, RequestOptions} from "@angular/http";


import { Pessoa } from "../model/pessoa";

@Injectable()
export class PessoaService {

  private pessoas: Array<any>;
  p:Pessoa;


  constructor(public http: Http) {}

  fetchData(url: string): Promise<any> {

    return new Promise(resolve => {

      this.http.get(url).map(res => res.json())

    });
  }

  //INSERE



  insere(p: Pessoa, url:string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(p);
    return this.http.post(url, body, headers).map((res: Response) => res.json());
  }



  //UPDATE
  update(p:Pessoa, url:string){}

  //DELETE
  delete(id:number, url:string){}



}
