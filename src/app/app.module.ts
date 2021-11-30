import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllHerosComponent } from './pages/all-heros/all-heros.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroComponent } from './pages/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AllHerosComponent,
    NotFoundComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
