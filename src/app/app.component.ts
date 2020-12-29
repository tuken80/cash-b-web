import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <header class="android-header mdl-layout__header mdl-layout__header--waterfall">
      <mat-toolbar color="primary">
        <mat-toolbar-row id="toolbar-title">
          <button mat-icon-button aria-label="Ouvrir le menu" (click)="navSidenav.toggle()"><mat-icon>menu</mat-icon></button>
          <span id="span-title">
          <a id="link-title" onclick="document.location='/';return false;">Brolik ENTERTAINMENT</a>
      </span>
          <span class="toolbar-spacer"></span>
          <div fxLayout="row" fxLayoutAlign="center center">
            <app-reseaux-sociaux></app-reseaux-sociaux>
            <app-search-form></app-search-form>
          </div>
        </mat-toolbar-row>
      </mat-toolbar>
    </header>
    <mat-sidenav-container>
      <mat-sidenav #navSidenav mode="side" opened
                   fixedInViewport="true" fixedTopGap="100"
                   fixedBottomGap="0">
        <app-nav></app-nav>
      </mat-sidenav>

      <mat-sidenav-content>
        <router-outlet></router-outlet>
        <footer class="android-footer mdl-mega-footer">
          <mat-toolbar color="primary">
            <mat-toolbar-row>
              <app-reseaux-sociaux fxFlkex="50"></app-reseaux-sociaux>
              <span class="toolbar-spacer"></span>

              <a class="accent" routerLink="/home">
                Haut de page
                <mat-icon>expand_less</mat-icon>
              </a>
            </mat-toolbar-row>
            <mat-toolbar-row>
              <div class="mdl-mega-footer--bottom-section">
                <a class="accent" routerLink="/social/contact">Nous contacter</a>
                <a class="accent" routerLink="/social/newsletter">Newsletter</a>
                <a class="accent" routerLink="/license" routerLinkActive="active">Mentions légales</a>
              </div>
              <span class="toolbar-spacer"></span>
              <p class="mdl-typography--font-light">Cash B © 2020 - Brolik ENTERTAINMENT</p>
            </mat-toolbar-row>
          </mat-toolbar>
        </footer>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
      "#toolbar-title { height: 115px; }",
      "#span-title { margin-left: 50px; }",
      "mat-sidenav { display: flex; align-items: center; justify-content: center; width: 280px; }",
      "header { position: fixed; top: 0; left: 0; right: 0; }",
      "mat-sidenav-container { position: absolute; top: 60px; left: 0; right: 0; }",
      "#link-title { cursor: pointer; color: #8BC34A; }",
      "app-reseaux-sociaux, app-search-form { margin: 20px; }",
      "footer a { text-decoration: none; }",
      "footer { padding: 0; margin-top: 100px; }"
  ]
})
export class AppComponent {
  SearchFormGroup: FormGroup;
}
