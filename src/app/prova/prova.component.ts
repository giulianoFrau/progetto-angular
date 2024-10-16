import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  Input,
  SimpleChange,
  EventEmitter,
  Output,
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
    OnDestroy,
    OnInit
{
  longText: string = `.`;
  cani = [
    {
      nome: 'jack',
      razza: 'pastore tedesco',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting`,
    },
  ];

  isDisabled: boolean = false;
  stringaSwitchCase: string = 'a';
  immagine1: string =
    'https://play-lh.googleusercontent.com/0VdMo-szGhdQpvEOvHOOG3ii27IkJCt4L9f8FMMKkTcfzADbNRbliz7Y6uDdbrOnG54O';
  immagine2: string =
    'https://material.angular.io/assets/img/examples/shiba2.jpg';
  data: any = [];
  @Input() title2: string = '';
  @Output() mandaArrayResponse = new EventEmitter<any>();

  constructor() {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('onInit');
    this.fetchData();
  }

  changeButtonColor(img: string) {
    this.isDisabled = !this.isDisabled;
    console.log(img);
  }

  async fetchData(): Promise<void> {
    const response = await fetch('https://restcountries.com/v3.1/all');
    this.data = await response.json();
    this.data = this.data.sort((a: any, b: any) =>
      a.name.common.localeCompare(b.name.common)
    );
  }

  mandaArray() {
    this.mandaArrayResponse.emit(this.data);
  }

  ngDoCheck(): void {
    //console.log('doCheck');
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }
  ngAfterViewChecked(): void {
    //console.log('afterViewCheck');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
}
