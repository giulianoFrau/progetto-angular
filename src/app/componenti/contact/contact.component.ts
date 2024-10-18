import { Component } from '@angular/core';
import { PersoneService } from '../../servizi/persone.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  persone: any = [];
  persona: any = {};
  isProfile: boolean = false;
  urlId: any;
  constructor(
    private personeService: PersoneService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.urlId = this.route.snapshot.paramMap.get('id');
    if (this.urlId) {
      const index: number | any = parseInt(this.urlId) - 1;
      this.persona = this.personeService.getPersonaByIndex(parseInt(index));
    } else {
      this.persone = this.personeService.getPersone();
    }
  }
}
