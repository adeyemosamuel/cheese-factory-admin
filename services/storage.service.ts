import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(val: string) {
    localStorage.setItem('token', val);
  }

  static getToken(): string {
    return localStorage.getItem('token');
  }

  static logout() {
    localStorage.removeItem('token');
  }
}
