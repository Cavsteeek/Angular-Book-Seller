import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgModule } from '@angular/core';
import { routes } from './app/app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


bootstrapApplication(AppComponent, appConfig, )
  .catch((err) => console.error(err));
