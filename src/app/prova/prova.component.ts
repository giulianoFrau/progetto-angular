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
  immagine1="https://play-lh.googleusercontent.com/0VdMo-szGhdQpvEOvHOOG3ii27IkJCt4L9f8FMMKkTcfzADbNRbliz7Y6uDdbrOnG54O";
  immagine2="https://material.angular.io/assets/img/examples/shiba2.jpg"
  constructor() {
    console.log('costruttore');
  }
  ngOnInit(): void {
    console.log('onInit');
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000);
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
