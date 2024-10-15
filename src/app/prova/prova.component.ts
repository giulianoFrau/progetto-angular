import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent
  implements
    AfterViewChecked,
    AfterContentInit,
    AfterViewChecked,
    DoCheck,
    OnDestroy
{
  longText: string = `.`;
  cani: Array<{ nome: string; razza: string; descrizione: string }> = [
    {
      nome: 'jack',
      razza: 'pastore tedesco',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting`,
    },
  ];

  isDisabled: boolean = false;
  immagine1: string =
    'https://play-lh.googleusercontent.com/0VdMo-szGhdQpvEOvHOOG3ii27IkJCt4L9f8FMMKkTcfzADbNRbliz7Y6uDdbrOnG54O';
  immagine2: string =
    'https://material.angular.io/assets/img/examples/shiba2.jpg';
  data: any = [];
  constructor() {
    console.log('costruttore');
  }
  ngOnInit(): void {
    console.log('onInit');
    this.fetchData();
  }

  changeButtonColor() {
    this.isDisabled = !this.isDisabled;
  }

  async fetchData(): Promise<void> {
    const response = await fetch('https://restcountries.com/v3.1/all');
    this.data = await response.json();
    console.log(this.data);
  }
  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('afterViewCheck');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
}
