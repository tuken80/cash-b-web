import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MaterialModule} from '../../material.module';

import { MusiqueHeaderComponent } from './components/header.component';
import { MusiqueVideosComponent } from './components/videos.component';
import { MusiqueDownloadsComponent } from './components/downloads.component';

import {MusiqueRoutingModule} from './musique-routing.module';

@NgModule({
  declarations: [
    MusiqueHeaderComponent,
    MusiqueVideosComponent,
    MusiqueDownloadsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MusiqueRoutingModule
  ]
})
export class MusiqueModule { }
