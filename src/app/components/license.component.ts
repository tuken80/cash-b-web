import { Component } from '@angular/core';

@Component({
  selector: 'app-license',
  template: `
    <mat-card fxFlex="20">
      <mat-card-header>
        <mat-card-title>INTERVIEW CASH B</mat-card-title>
        <mat-card-subtitle>DATE INTERVIEW</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="/assets/images/more-from-1.png" alt="Dernière actualitée">
      <mat-card-content>
        <p>CASH B & PATATI & PATATA</p>
        <p>TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE </p>
      </mat-card-content>
      <mat-card-actions>
        <button color="accent" mat-stroked-button routerLink="/social/actualitee/id">DETAILS</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: []
})
export class LicenseComponent {

}
