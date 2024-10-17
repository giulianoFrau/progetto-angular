import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProvaService {
  datoDaIniettare = 'Dato iniettato dal servizio';

  constructor() {}
}
