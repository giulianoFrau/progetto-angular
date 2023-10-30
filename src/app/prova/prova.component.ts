import { AfterContentInit, AfterViewChecked, Component,OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit,AfterViewChecked,AfterContentInit,AfterViewChecked,OnDestroy {
  longText = `.`;
  cani=[
    {nome:'jack',razza:'pastore tedesco',descrizione:`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting`}
]
  constructor(){
  console.log('costruttore')
}
ngOnInit(): void {
    console.log('onInit')
}
ngAfterContentInit(): void {
  console.log('afterContentInit')
}
ngAfterViewChecked(): void {
  console.log('afterViewCheck')
    
}
ngOnDestroy(): void {
  console.log('destroy')
    
}
}
