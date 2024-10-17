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
  constructor(
    private personeService: PersoneService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.persona = this.personeService.getPersonaByIndex(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
    } else {
      this.isProfile = false;
      this.persone = this.personeService.getPersone();
    }
  }
}
