import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
interface Oggetto {
  nome: string;
  cognome: string;
}
@Component({
  selector: 'app-prova2',
  templateUrl: './prova2.component.html',
  styleUrls: ['./prova2.component.css'],
})
export class Prova2Component implements OnInit {
  @Input() title: string = '';
  @Input() test: boolean = false;
  @Output() mandaDatiEvento = new EventEmitter<Oggetto>();

  nome = 'nome test';
  cognome = 'cognome test';
  oggetto = { nome: 'nomeee', cognome: 'cognomee' };
  constructor() {}

  ngOnInit(): void {}
  mandaDati() {
    this.mandaDatiEvento.emit(this.oggetto);
  }
}
