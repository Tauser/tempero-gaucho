import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RotasService {

  private rotas: Array<any>;

  constructor(public http: Http) {}

  fetchData(url: string): Promise<any> {

    return new Promise(resolve => {

      this.http.get(url).map(res => res.json())
        .subscribe(data => {
            this.rotas = data.rows;
            console.log(this.rotas);
            resolve(this.rotas);
            }, err => console.log(err));
    });
  }
}
