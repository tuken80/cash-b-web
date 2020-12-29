import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Musique } from '../../../models/musique';

@Component({
  selector: 'app-musique-videos',
  template: `
    <app-musique-header></app-musique-header>
    <section fxLayout="row" fxLayoutAlign="center start">
      <div fxFlex="10" *ngIf="current"></div>
      <div fxFlex="45" fxLayout="column" fxLayoutAlign="center center" *ngIf="current">
        <mat-card>
          <mat-card-header>
            <mat-card-title>{{current.titre}}</mat-card-title>
            <mat-card-subtitle>CASH B - {{current.annee}}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content fxLayout="column" fxLayoutAlign="center center">
            <mat-button-toggle-group #formatPlayer="matButtonToggleGroup" appearance="legacy" value="mp4">
              <mat-button-toggle value="mp3"
                                 aria-label="MP3"
                                 #tooltip="matTooltip"
                                 matTooltip="Player format MP3"
                                 matTooltipPosition="below">
                <mat-icon>audiotrack</mat-icon>
              </mat-button-toggle>
              <mat-button-toggle value="mp4"
                                 aria-label="MP4"
                                 #tooltip="matTooltip"
                                 matTooltip="Player format MP4"
                                 matTooltipPosition="below">
                <mat-icon>music_video</mat-icon>
              </mat-button-toggle>
            </mat-button-toggle-group>
            <video src="{{current.videoPath}}" controls *ngIf="formatPlayer.value == 'mp4'">
              <p>Votre navigateur ne supporte pas le lancement de vidéos. Vous pouvez malgré tout télécharger la vidéo gràce à ce lien : <a href="/assets/videos/cash_b-lache_la_bete.mp4">TELECHARGEMENT</a>.</p>
            </video>
            <audio src="{{current.audioPath}}" controls *ngIf="formatPlayer.value == 'mp3'">
              <p>Votre navigateur ne supporte pas le lancement de fichier audio. Vous pouvez malgré tout télécharger la vidéo gràce à ce lien : <a href="/assets/videos/cash_b-lache_la_bete.mp4">TELECHARGEMENT</a>.</p>
            </audio>
          </mat-card-content>
          <mat-card-actions>
            <button color="primary" mat-stroked-button [routerLink]="current.ddlAudioPath">TELECHARGER AU FORMAT MP3</button>
            <button color="accent" mat-stroked-button [routerLink]="current.ddlVideoPath">TELECHARGER AU FORMAT MP4</button>
          </mat-card-actions>
        </mat-card>
      </div>
      <div fxFlex="10" *ngIf="current"></div>
      <div fxFlex="30">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Titres musicaux</mat-card-title>
            <mat-card-subtitle>Par année</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <mat-list>
              <div mat-subheader>2019</div>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'lache_la_bete'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>LACHE LA BETE</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'qds'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>QDS</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'marginal_2019'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>MARGINAL</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
              <mat-divider></mat-divider>
              <div mat-subheader>2017</div>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'ligue_1'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>LIGUE 1</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
              <mat-divider></mat-divider>
              <div mat-subheader>2016</div>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'conozco_la_calle'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>CONOZCO LA CALLE</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'que_du_sale'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>QUE DU SALE</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'marginal_2016'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>MARGINAL</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
              <mat-divider></mat-divider>
              <div mat-subheader>2015</div>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'jmen_fou_jmen_fou'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>JMEN FOU JMEN FOU</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
              <mat-list-item routerLink="/musique/videos" [queryParams]="{titre: 'merce'}">
                <mat-icon mat-list-icon>video_label</mat-icon>
                <div mat-line>MERCE</div>
                <div mat-line>CASH B</div>
              </mat-list-item>
            </mat-list>
          </mat-card-content>
        </mat-card>
      </div>
    </section>
  `,
  styles: [
      "mat-card { margin: 30px; }",
      "mat-list-item { cursor: pointer; }",
      "video { width: 80vh; }",
      "audio { margin: 50px; }",
      "mat-button-toggle-group { margin: 15px; }"
  ]
})
export class MusiqueVideosComponent implements OnInit {
  current: Musique;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params.titre) {
          this.current = new Musique();

          switch (params.titre) {
            case 'lache_la_bete':
              this.current.titre = 'LACHE LA BETE';
              this.current.annee = 2019;
              break;
            case 'qds':
              this.current.titre = 'QDS';
              this.current.annee = 2019;
              break;
            case 'marginal_2019':
              this.current.titre = 'MARGINAL';
              this.current.annee = 2019;
              break;
            case 'ligue_1':
              this.current.titre = 'LIGUE 1';
              this.current.annee = 2017;
              break;
            case 'conozco_la_calle':
              this.current.titre = 'CONOZCO LA CALLE';
              this.current.annee = 2016;
              break;
            case 'que_du_sale':
              this.current.titre = 'QUE DU SALE';
              this.current.annee = 2016;
              break;
            case 'marginal_2016':
              this.current.titre = 'MARGINAL';
              this.current.annee = 2016;
              break;
            case 'jmen_fou_jmen_fou':
              this.current.titre = 'JMEN FOU JMEN FOU';
              this.current.annee = 2015;
              break;
            case 'ligue_1':
              this.current.titre = 'MERCE';
              this.current.annee = 2015;
              break;
          }

          this.current.videoPath = `/assets/videos/cash_b-${params.titre}.mp4`;
          this.current.audioPath = `/assets/audios/cash_b-${params.titre}.mp3`;
          this.current.ddlVideoPath = `/musique/downloads/cash_b-${params.titre}.mp4`;
          this.current.ddlAudioPath = `/musique/downloads/cash_b-${params.titre}.mp3`;
        }
      }
    );
  }
}
