import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FlexLayoutModule} from "@angular/flex-layout";

import {MaterialModule} from "./material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from "./components/home.component";
import {LicenseComponent} from "./components/license.component";
import {NotFoundComponent} from "./components/not-found.component";

import {ReseauxSociauxComponent} from "./widgets/reseaux-sociaux.component";
import {NavComponent} from "./widgets/nav.component";

import {SearchFormComponent} from "./forms/search-form.component";

@NgModule({
  declarations: [
    HomeComponent,
    LicenseComponent,
    NotFoundComponent,
    ReseauxSociauxComponent,
    NavComponent,
    SearchFormComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
