import { Component } from '@angular/core';

@Component({
  selector: 'app-musique-downloads',
  template: `
    <app-musique-header></app-musique-header>
    <section fxLayout="row" fxLayoutAlign="space-around center" fxLayoutGap="30px">
        <mat-card fxFlex="20"> 
            <mat-card-header>
                <mat-card-title>CONOZCO LA CALLE</mat-card-title>
                <mat-card-subtitle>CASH B</mat-card-subtitle>
            </mat-card-header>
            <mat-card-actions>
                <button color="primary" mat-stroked-button [routerLink]="'/bidon'">TELECHARGER AU FORMAT MP3</button>
                <button color="accent" mat-stroked-button [routerLink]="'/bidon'">TELECHARGER AU FORMAT MP4</button>
            </mat-card-actions>
        </mat-card>
        <mat-card fxFlex="20">
            <mat-card-header>
                <mat-card-title>CONOZCO LA CALLE</mat-card-title>
                <mat-card-subtitle>CASH B</mat-card-subtitle>
            </mat-card-header>
            <mat-card-actions>
                <button color="primary" mat-stroked-button [routerLink]="'/bidon'">TELECHARGER AU FORMAT MP3</button>
                <button color="accent" mat-stroked-button [routerLink]="'/bidon'">TELECHARGER AU FORMAT MP4</button>
            </mat-card-actions>
        </mat-card>
        <mat-card fxFlex="20">
            <mat-card-header>
                <mat-card-title>CONOZCO LA CALLE</mat-card-title>
                <mat-card-subtitle>CASH B</mat-card-subtitle>
            </mat-card-header>
            <mat-card-actions>
                <button color="primary" mat-stroked-button [routerLink]="'/bidon'">TELECHARGER AU FORMAT MP3</button>
                <button color="accent" mat-stroked-button [routerLink]="'/bidon'">TELECHARGER AU FORMAT MP4</button>
            </mat-card-actions>
        </mat-card>
        <mat-card fxFlex="20">
            <mat-card-header>
                <mat-card-title>CONOZCO LA CALLE</mat-card-title>
                <mat-card-subtitle>CASH B</mat-card-subtitle>
            </mat-card-header>
            <mat-card-actions>
                <button color="primary" mat-stroked-button [routerLink]="'/bidon'">TELECHARGER AU FORMAT MP3</button>
                <button color="accent" mat-stroked-button [routerLink]="'/bidon'">TELECHARGER AU FORMAT MP4</button>
            </mat-card-actions>
        </mat-card>
    </section>
  `,
  styles: [
  ]
})
export class MusiqueDownloadsComponent {
}
