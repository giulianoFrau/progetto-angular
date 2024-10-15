import { Component } from '@angular/core';

@Component({
  selector: 'app-input-event-binding',
  templateUrl: './input-event-binding.component.html',
  styleUrls: ['./input-event-binding.component.css'],
})
export class InputEventBindingComponent {
  inputValue = 'test';
  title = 'corso angular';
  subtitle = 'test';
  isVisible = true;

  onInput(e: any) {
    console.log(e.target.value); //alternativa a giu più semplice
  }

  /*  onInput(e: Event) {
    console.log((<HTMLInputElement>e.target).value);
  } */

  onClick(e: any) {
    // this.title='ho cliccato sul bottone'
    console.log(this.title + this.subtitle);
  }
}
