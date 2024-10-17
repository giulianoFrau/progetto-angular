import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { InputEventBindingComponent } from './componenti/input-event-binding/input-event-binding.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'input',
    component: InputEventBindingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
