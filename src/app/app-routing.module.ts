import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home.component";
import {LicenseComponent} from "./components/license.component";
import {NotFoundComponent} from "./components/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'session', loadChildren: () => import(`./modules/session/session.module`).then(m => m.SessionModule) },
  { path: 'musique', loadChildren: () => import(`./modules/musique/musique.module`).then(m => m.MusiqueModule) },
  { path: 'social', loadChildren: () => import(`./modules/social/social.module`).then(m => m.SocialModule) },
  { path: '**', redirectTo: '/not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
