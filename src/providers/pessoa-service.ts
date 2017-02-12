import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PessoaService {

  private pessoas: Array<any>;


  constructor(public http: Http) {}

  fetchData(url: string): Promise<any> {

    return new Promise(resolve => {

      this.http.get(url).map(res => res.json())
        .subscribe(data => {
          this.pessoas = data.rows;
          console.log(this.pessoas);

          resolve(this.pessoas);
        }, err => console.log(err));
    });
  }
}
