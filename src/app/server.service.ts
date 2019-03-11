import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  // tslint:disable-next-line:ban-types
  url: String = 'http://192.168.0.112:3333/api';

// tslint:disable-next-line: deprecation
  headers: Headers;

// tslint:disable-next-line: deprecation
  constructor(private http: Http) { }
  async setHeaders() {
    const Token = localStorage.getItem('Token');

    if (Token) {
// tslint:disable-next-line: deprecation
      this.headers = new Headers({
        'Content-Type': 'application/json',
        // tslint:disable-next-line:object-literal-key-quotes
        'Authorization': `${Token}`,
      });
    } else {
// tslint:disable-next-line: deprecation
      this.headers = new Headers({
        'Content-Type': 'application/json'
      });
    }
  }

  async getService(funcName): Promise<any> {
    await this.setHeaders();

    try {
      const response = await this.http.get(`${this.url}/${funcName}`, { headers: this.headers }).toPromise();
      return response.json();
    } catch (err) {
      return err.json();
    }
  }

  async postService(funcName, body): Promise<any> {
    await this.setHeaders();

    try {
      // const response = await this.http.post(`${this.url}/${funcName}`, JSON.stringify(body), { headers: this.headers }).toPromise();
      const response = await this.http.post(`${this.url}/${funcName}`, body, { headers: this.headers }).toPromise();
      return response.json();
    } catch (err) {
      return err.json();
    }
  }

}
