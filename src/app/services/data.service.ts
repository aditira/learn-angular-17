import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async load() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data berhasil dimuat');
      }, 2000);
    });
  }
}
