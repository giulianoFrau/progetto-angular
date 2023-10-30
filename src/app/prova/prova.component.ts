import { AfterContentInit, AfterViewChecked, Component,OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit,AfterViewChecked,AfterContentInit,AfterViewChecked,OnDestroy {
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
