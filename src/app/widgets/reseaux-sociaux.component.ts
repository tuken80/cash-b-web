import { Component } from '@angular/core';

@Component({
  selector: 'app-reseaux-sociaux',
  template: `
    <div fxLayout="row" fxLayoutAlign="space-between">
    <button
        (click)="redirectYoutube()"
        matTooltip="Youtube"
        matTooltipPosition="below"
        fxFlex="25"
        color="primary">
      <img src="/assets/images/youtube.png" alt="Accéder à la chaine YouTube" height="45" width="45">
    </button>
    <button
        (click)="redirectFacebook()"
        matTooltip="Facebook"
        matTooltipPosition="below"
        fxFlex="15">
      <img src="/assets/images/facebook.png" alt="Accéder au compte Facebook" height="35" width="35">
    </button>
    <button
        (click)="redirectTwitter()"
        matTooltip="Twitter"
        matTooltipPosition="below"
        fxFlex="15">
      <img src="/assets/images/twitter.png" alt="Accéder au compte Twitter" height="35" width="35">
    </button>
    <button
        (click)="redirectInstagram()"
        matTooltip="Instagram"
        matTooltipPosition="below"
        fxFlex="15">
      <img src="/assets/images/instagram.png" alt="Accéder au compte Instagram" height="35" width="35">
    </button>
  </div>
  `,
  styles: [
      "img { -webkit-transition: -webkit-transform 1s; transition: transform 1s; }",
      "img:hover { -ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); }",
      "#buttonFacebook { margin-left: 10px; }",
      "button { cursor: pointer; border: none; background-color: transparent; }"
  ]
})
export class ReseauxSociauxComponent {

  redirectYoutube(): void {
    window.location.href = 'https://www.youtube.com/channel/UCP0elXZ7DZHFLYrKrDAqfvg';
  }

  redirectFacebook(): void {
    window.location.href = 'https://www.facebook.com/CashBrolikOfficiel/';
  }

  redirectTwitter(): void {
    window.location.href = 'https://twitter.com/cash_brolik';
  }

  redirectInstagram(): void {
    window.location.href = 'https://www.instagram.com/cash_brolik/';
  }

}
