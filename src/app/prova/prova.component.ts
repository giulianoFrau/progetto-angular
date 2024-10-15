import {
  AfterContentInit,
  AfterViewChecked,
  Component,
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
    OnInit,
    AfterViewChecked,
    AfterContentInit,
    AfterViewChecked,
    OnDestroy
{
  longText = `.`;
  cani = [
    {
      nome: 'jack',
      razza: 'pastore tedesco',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting`,
    },
  ];

  isDisabled = false;
  immagine1 =
    'https://play-lh.googleusercontent.com/0VdMo-szGhdQpvEOvHOOG3ii27IkJCt4L9f8FMMKkTcfzADbNRbliz7Y6uDdbrOnG54O';
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
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
