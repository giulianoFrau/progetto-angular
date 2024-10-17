import { Component } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
@Component({
  selector: 'app-input-event-binding',
  templateUrl: './input-event-binding.component.html',
  styleUrls: ['./input-event-binding.component.css'],
})
export class InputEventBindingComponent {
  title = 'corso angular';
  subtitle = 'test';

  constructor(private servizioProva: ServizioProvaService) {}

  onClick() {
    console.log(this.title + this.subtitle);
  }

  async fetchData() {
    await this.servizioProva.fetchData();
    console.log(this.servizioProva.data);
  }
}
