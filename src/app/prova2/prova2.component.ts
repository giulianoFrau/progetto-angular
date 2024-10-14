import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prova2',
  templateUrl: './prova2.component.html',
  styleUrls: ['./prova2.component.css'],
})
export class Prova2Component implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
