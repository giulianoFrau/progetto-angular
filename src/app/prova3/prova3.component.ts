import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-prova3',
  templateUrl: './prova3.component.html',
  styleUrls: ['./prova3.component.css'],
})
export class Prova3Component {
  @ViewChild('inputSaluti') valoreInput!: ElementRef;
  colore = 'purple';
  ngAfterViewInit() {
    console.log(this.valoreInput.nativeElement.value);
  }
}
