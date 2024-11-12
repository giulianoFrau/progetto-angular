import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  formData: any = null;
  isDataSend: boolean = false;

  constructor(private firebase: FirebaseService) {}
  onSubmit(form: any) {
    this.formData = form.form.value;
    this.firebase
      .insertPersona(
        'https://corso-angular-14ad1-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
        this.formData
      )
      .subscribe((data) => {
        this.isDataSend = true;
      });

    console.log(this.formData);
  }
}

/*
**
 * ALTERNATIVA A USARE SUBSCRIBE USANDO lastValueFrom
 * 
 * 
 * 
 * import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  formData: any = null;
  isDataSend: boolean = false;

  constructor(private firebase: FirebaseService) {}
  async onSubmit(form: any) {
    this.formData = form.form.value;
    await lastValueFrom(
      this.firebase.insertPersona(
        'https://corso-angular-14ad1-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
        this.formData
      )
    );

    console.log(this.formData);
  }
}

 */
