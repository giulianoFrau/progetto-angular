import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  formData: any = null;
  isDataSend: boolean = false;
  onSubmit(form: any) {
    this.formData = form.form.value;
    this.isDataSend = true;
  }
}
