import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersoneService {
  persone = [
    { nome: 'nome1', cognome: 'cognome1', isOnline: true, color: 'blue' },
    { nome: 'nome2', cognome: 'cognome2', isOnline: false, color: 'yellow' },
    { nome: 'nome3', cognome: 'cognome3', isOnline: true, color: 'red' },
    { nome: 'nome4', cognome: 'cognome4', isOnline: false, color: 'green' },
    { nome: 'nome5', cognome: 'cognome5', isOnline: true, color: 'purple' },
  ];

  constructor() {}

  getPersone() {
    return this.persone;
  }

  getPersonaByIndex(index: number) {
    return this.persone[index];
  }
}
