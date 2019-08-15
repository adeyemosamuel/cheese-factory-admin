import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data: any;

  constructor() { }

  public setData(val) {
    this.data = val;
  }

  public getData() {
    return this.data;
  }
}
