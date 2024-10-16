import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { InputEventBindingComponent } from './input-event-binding/input-event-binding.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Prova2Component } from './prova2/prova2.component';
import { Prova3Component } from './prova3/prova3.component';
@NgModule({
  declarations: [AppComponent, ProvaComponent, InputEventBindingComponent, Prova2Component, Prova3Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
