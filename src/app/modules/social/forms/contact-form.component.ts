import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  template: `
    <form [formGroup]="FormContact" (ngSubmit)="send()">
      <mat-card>
        <mat-card-header>
          <mat-card-title>FORMULAIRE DE CONTACT</mat-card-title>
          <mat-card-subtitle>Veuillez remplir tous les champs suivants</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field appearance="outline">
            <mat-label>Sujet</mat-label>
            <input matInput placeholder="Donnez un titre à votre demande de contact." name="Sujet" formControlName="sujet" required>
            <mat-error *ngIf="(FormContact.get('sujet').invalid && (FormContact.get('sujet').dirty || FormContact.get('sujet').touched)) && FormContact.get('sujet').errors.required">Le sujet est obligatoire.</mat-error>
          </mat-form-field>
          <mat-divider></mat-divider>
          <mat-form-field appearance="outline">
            <mat-label>Adresse mail</mat-label>
            <input matInput placeholder="john.doe@icloud.com" name="Email" type="email" formControlName="mail" required>
            <mat-icon matSuffix>mail</mat-icon>
            <mat-error *ngIf="(FormContact.get('mail').invalid && (FormContact.get('mail').dirty || FormContact.get('mail').touched)) && FormContact.get('mail').errors.required">L'adresse mail est obligatoire.</mat-error>
            <mat-error *ngIf="(FormContact.get('mail').invalid && (FormContact.get('mail').dirty || FormContact.get('mail').touched)) && FormContact.get('mail').errors.email">L'adresse mail doit être au bon format.</mat-error>
          </mat-form-field>
          <mat-divider></mat-divider>
          <mat-form-field appearance="outline">
            <mat-label>Message</mat-label>
            <textarea matInput placeholder="Décrivez ici dans ce champs le but de votre démarche." name="Message" type="text" rows="5"  formControlName="message" required></textarea>
            <mat-error *ngIf="(FormContact.get('message').invalid && (FormContact.get('message').dirty || FormContact.get('message').touched)) && FormContact.get('message').errors.email">Le message est obligatoire.</mat-error>
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions>
          <button mat-stroked-button type="submit">Envoyer</button>
        </mat-card-actions>
      </mat-card>
    </form>
  `,
  styles: [
    "#textAlignCenterBis { text-align: center; }",
    "#itemsAlignCenterBis { items-align: center;} "
  ]
})

export class ContactFormComponent implements OnInit {
  FormContact: FormGroup;

  constructor() { }

  ngOnInit() {
    this.FormContact = new FormGroup({
      sujet: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      message: new FormControl('', [
        Validators.required
      ])
    });
  }

  send() {

  }
}
