import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusiqueVideosComponent } from './components/videos.component';
import { MusiqueDownloadsComponent } from './components/downloads.component';

const routes: Routes = [
  { path: 'videos', component: MusiqueVideosComponent },
  { path: 'downloads', component: MusiqueDownloadsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MusiqueRoutingModule {}
