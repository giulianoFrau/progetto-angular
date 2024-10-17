import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProvaService {
  datoDaIniettare = 'Dato iniettato dal servizio';
  data: any[] = [];
  constructor() {}

  async fetchData(): Promise<void> {
    const response = await fetch('https://restcountries.com/v3.1/all');
    this.data = await response.json();
    this.data = this.data.sort((a: any, b: any) =>
      a.name.common.localeCompare(b.name.common)
    );
  }
}
