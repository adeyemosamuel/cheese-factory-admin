import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private url: string = environment.api_server;
  httpOptions: any;


  constructor(private http: HttpClient) { }

  setHeader(): HttpHeaders {
    const token = StorageService.getToken();

    if (token) {
      return new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
    }

    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  async postService(body: any, endpoint: string): Promise<any> {
    const url = environment.api_server + endpoint;
    try {
      const response = await this.http.post(url, JSON.stringify(body), {headers: this.setHeader()}).toPromise();
      return response;
    } catch (e) {
      return e as HttpErrorResponse;
    }
  }

  async getService(endpoint: string): Promise<any> {
    const url = environment.api_server + endpoint;
    try {
      return await this.http.get(url, {headers: this.setHeader()}).toPromise();
    } catch (e) {
      return e as HttpErrorResponse;
    }
  }
}


