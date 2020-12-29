import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  template: `
    <nav>
      <mat-list>
        <div mat-subheader>Navigation</div>
        <mat-list-item routerLink="/home" routerLinkActive="accent">
          <mat-icon mat-list-icon>home</mat-icon>
          <div mat-line>Accueil</div>
          <div mat-line>Présentation</div>
        </mat-list-item>
        <mat-divider></mat-divider>
        <div mat-subheader>Musiques</div>
        <mat-list-item routerLink="/musique/videos" routerLinkActive="accent">
          <mat-icon mat-list-icon>featured_video</mat-icon>
          <div mat-line>Clips online</div>
          <div mat-line>AUDIO & VIDEOS</div>
        </mat-list-item>
        <mat-list-item routerLink="/musique/downloads" routerLinkActive="accent">
          <mat-icon mat-list-icon>cloud_download</mat-icon>
          <div mat-line>Téléchargements</div>
          <div mat-line>MP3 & MP4</div>
        </mat-list-item>
        <mat-divider></mat-divider>
        <div mat-subheader>Social</div>
        <mat-list-item>
          <mat-icon mat-list-icon>list</mat-icon>
          <div mat-line>Contact</div>
          <div mat-line>Formulaire</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon mat-list-icon>map</mat-icon>
          <div mat-line>MAP</div>
          <div mat-line>Google Maps</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon mat-list-icon>send</mat-icon>
          <div mat-line>NEWSLETTER</div>
          <div mat-line>Pour tout savoir</div>
        </mat-list-item>
      </mat-list>
    </nav>
  `,
  styles: [
      "mat-list-item { cursor: pointer; }",
      "mat-list { margin-top:30px; }"
  ]
})
export class NavComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(route.url);
  }
}
