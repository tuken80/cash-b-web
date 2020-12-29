import {Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  template: `
    <form [formGroup]="SearchFormGroup" (ngSubmit)="launch()" fxLayout="column" fxLayoutAlign="center center">
      <mat-form-field appearance="outline" floatLabel="always" color="accent">
        <input matInput placeholder="Vidéos, musiques ..." formControlName="search">
        <mat-label class="accent">Recherche</mat-label>
        <mat-error *ngIf="SearchFormGroup.get('search').errors.required">Veuillez entrer du texte.</mat-error>
        <button type="submit" mat-icon-button matSuffix aria-label="Lancer la recherche">
          <mat-icon>search</mat-icon>
        </button>
      </mat-form-field>
    </form>
  `,
  styles: []
})
export class SearchFormComponent implements OnInit {
  SearchFormGroup: FormGroup;

  ngOnInit(): void {
    this.SearchFormGroup = new FormGroup({
      search: new FormControl('', [
        Validators.required
      ])
    });
  }


  launch(): void {

  }
}
