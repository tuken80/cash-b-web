import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact.component';
import { MapComponent } from './components/map.component';
import { NewsletterComponent } from './components/newsletter.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'map', component: MapComponent },
  { path: 'newsletter', component: NewsletterComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SocialRoutingModule {}
