import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { ServizioProvaService } from '../servizi/servizio-prova.service';
@Component({
  selector: 'app-prova3',
  templateUrl: './prova3.component.html',
  styleUrls: ['./prova3.component.css'],
})
export class Prova3Component {
  //alternativa al ngModel
  @ViewChild('inputSaluti') valoreInput!: ElementRef; // il punto esclamativo indica che il parametro potrebbe non esistere

  colore = 'purple';
  title = 'Corso angular ';
  oggi = new Date();
  dataComponente: any[] = [];

  constructor(private servizioProva: ServizioProvaService) {}

  async ngOnInit() {
    console.log(this.servizioProva.datoDaIniettare);
    await this.servizioProva.fetchData();
    this.dataComponente = this.servizioProva.data;
  }
  ngAfterViewInit() {
    console.log(this.valoreInput.nativeElement.value);
  }
}
