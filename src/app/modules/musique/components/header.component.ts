import { Component } from '@angular/core';

@Component({
  selector: 'app-musique-header',
  template: `
    <div id="img-header-page"></div>
    <mat-toolbar color="accent">
      <mat-toolbar-row>
        <span class="toolbar-spacer"></span>
        <span class="primary size-blaz">CASH B</span>
        <span class="toolbar-spacer"></span>
        <span class="primary size-blaz">MEDIATHEQUE</span>
        <span class="toolbar-spacer"></span>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [
    "#img-header-page { background-image: url('../../../../assets/images/header.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover; height: 300px; }",
    ".size-blaz { font-size: 35px; }"
  ]
})
export class MusiqueHeaderComponent {
}
