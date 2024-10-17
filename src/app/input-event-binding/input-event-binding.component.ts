import { Component } from '@angular/core';

@Component({
  selector: 'app-input-event-binding',
  templateUrl: './input-event-binding.component.html',
  styleUrls: ['./input-event-binding.component.css'],
})
export class InputEventBindingComponent {
  title = 'corso angular';
  subtitle = 'test';

  onClick() {
    console.log(this.title + this.subtitle);
  }
}
