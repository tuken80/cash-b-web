import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from '../../material.module';

import { ContactComponent } from './components/contact.component';
import { MapComponent } from './components/map.component';
import { NewsletterComponent } from './components/newsletter.component';

import { ContactFormComponent } from './forms/contact-form.component';
import { NewsletterFormComponent   } from './forms/newsletter-form.component';

import {SocialRoutingModule} from './social-routing.module';

@NgModule({
  declarations: [
    ContactComponent,
    MapComponent,
    NewsletterComponent,
    ContactFormComponent,
    NewsletterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SocialRoutingModule
  ]
})
export class SocialModule { }
