import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <a id="top"></a>
    <div class="mdl-typography--text-center" id="couverture">
      <div class="logo-font android-slogan"></div>
      <div class="logo-font android-sub-slogan"></div>
      <div class="logo-font android-create-character"></div>
      <a href="/home#description">
        <button mat-fab color="accent" aria-label="Button to expand home page"><mat-icon>expand_more</mat-icon></button>
      </a>
    </div>
    <a id="description"></a>
    <section id="zone-description" class="android-customized-section" fxLayout="row" fxLayoutAlign="space-evenly">
      <img alt="Portrait Cash B" src="/assets/images/cash_brolik.jpg" id="portrait-cash-brolik" fxFlex="33">
      <div class="android-customized-section-text" fxFlex="60">
        <div class="mdl-typography--font-light mdl-typography--display-1-color-contrast">Cash B</div>
        <p class="mdl-typography--font-light">Brolik ENTERTAINMENT</p>
        <p>Cash B est un jeune artiste amiénois, issu des quartiers sud de la ville, qui commence a trouver son public. Il a déjà fait ses preuves sur la toile avec plusieurs video-clips cumulant plus de 300 000 vues sur YouTube.</p>
        <p>Réussissant tout de suite à séduire un large public gràce à son style dilettante et terre a terre, capable de faire danser la foule, il aime exprimer la colère et la tristesse.</p>
        <p>Cash B est un artiste éclectique faisant sonner un rap cru au vécu bien trempé, et une pop urbaine aux textes ciselés qui osent le pari de la chanson française.</p>
        <p>Se plaçant comme en enfant du peuple en écrivant un titre qui fédère la montée en première division de l'équipe de football de sa ville natale: Amiens. Cette sortie en fanfare étant saluée par les médias de sa région comme France Télévision, le Courrier Picard ou encore SFR Sport.</p>
        <p>Cash B est actuellement en studio pour l’enregistrement de son premier album.</p>
        <hr>
        <div fxLayout="row" fxLayoutAlign="space-around">
          <app-reseaux-sociaux fxFlex="65"></app-reseaux-sociaux>
          <a href="/home#evenementiel" fxFlex="20">
            <button mat-fab color="accent" aria-label="Button to expand home page"><mat-icon>expand_more</mat-icon></button>
          </a>
        </div>
      </div>
    </section>
    <hr>
    <a id="evenementiel"></a>
    <section id="zone-evenementiel">
      <div class="android-section-title mdl-typography--display-1-color-contrast">Les dernières actualitées, les futurs évenements</div>
      <br>
      <div class="android-card-container mdl-grid" fxLayout="row" fxLayoutAlign="space-between">
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
        <mat-card fxFlex="20">
          <mat-card-header>
            <mat-card-title>TITRE ACTUALITEE</mat-card-title>
            <mat-card-subtitle>DATE ACTUALITE</mat-card-subtitle>
          </mat-card-header>
          <img mat-card-image src="/assets/images/more-from-4.png" alt="Avant-dernière actualitée">
          <mat-card-content>
            <p>TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE</p>
            <p>TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE </p>
          </mat-card-content>
          <mat-card-actions>
            <button color="accent" mat-stroked-button routerLink="/social/actualitee/id">DETAILS</button>
          </mat-card-actions>
        </mat-card>
        <mat-card fxFlex="20">
          <mat-card-header>
            <mat-card-title>TITRE ACTUALITEE</mat-card-title>
            <mat-card-subtitle>DATE ACTUALITE</mat-card-subtitle>
          </mat-card-header>
          <img mat-card-image src="/assets/images/more-from-4.png" alt="Avant-dernière actualitée">
          <mat-card-content>
            <p>TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE</p>
            <p>TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE </p>
          </mat-card-content>
          <mat-card-actions>
            <button color="accent" mat-stroked-button routerLink="/social/actualitee/id">DETAILS</button>
          </mat-card-actions>
        </mat-card>
        <mat-card fxFlex="20">
          <mat-card-header>
            <mat-card-title>MONTEE EN LIGUE 1 DE L'AMIENS SCF</mat-card-title>
            <mat-card-subtitle>DATE MONTEE</mat-card-subtitle>
          </mat-card-header>
          <img mat-card-image src="/assets/images/more-from-4.png" alt="Avant-avant-dernière actualitée">
          <mat-card-content>
            <p>AMIENS VA BROUTER LE MEME GAZON QUE ZLATAN</p>
            <p>TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE TEXT ACTUALITEE LOREM IPSUM FUCK THE BASILIQUE </p>
          </mat-card-content>
          <mat-card-actions>
            <button color="primary" mat-stroked-button routerLink="/social/actualitee/id">DETAILS</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </section>
    <hr>
    <a id="launchers"></a>
    <section id="zone-media" fxLayout="row" fxLayoutAlign="space-around">
      <mat-card fxFlex="35">
        <mat-card-header>
          <mat-card-title>MEDIATHEQUE</mat-card-title>
          <mat-card-subtitle>Accédez à toutes nos créations</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="/assets/images/musique.jpg" alt="Accéder aux musiques">
        <mat-card-content>
          <p>Retrouvez et téléchargez si vous le souhaitez l'ensemble des sons réalisées par Cash B.</p>
        </mat-card-content>
        <mat-card-actions>
          <button color="accent" mat-stroked-button>CLIPS VIDEOS</button>
          <button color="primary" mat-stroked-button>TELECHARGEMENTS</button>
        </mat-card-actions>
      </mat-card>
      <mat-card fxFlex="35">
        <mat-card-header>
          <mat-card-title>SOCIAL CLUB</mat-card-title>
          <mat-card-subtitle>Prenez contact ou alors abonnez-vous à la newsletter, elle vous permettra d'être à l'affût des dernières nouvelles.</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="/assets/images/newsletter.jpg" alt="Accéder à la section sociale">
        <mat-card-content>
          <p>C'est ici où vous pouvez parler avec Cash B d'une éventuelle colaboration.</p>
          <p>Et vous pouvez le contacter pour tout projet que vous pourriez avoir en commun avec lui.</p>
        </mat-card-content>
        <mat-card-actions class="mdl-card__supporting-text">
          <button color="accent" mat-stroked-button routerLink="/social/contact">CONTACT</button>
          <button color="primary" mat-stroked-button routerLink="/social/newsletter">NEWSLETTER</button>
          <button color="accent" mat-stroked-button routerLink="/social/map">MAP</button>
        </mat-card-actions>
      </mat-card>
    </section>
  `,
  styles: [
      "#zone-description { margin-top: 40px; }",
      "#zone-evenementiel { margin-top: 150px; }",
      "#zone-media { margin-top: 100px; }",
      "#couverture { background-image: url('../../assets/images/logo.png'); background-position: center; background-repeat: no-repeat; background-size: cover; }",
      "#portrait-cash-brolik { margin-left: auto; margin-right: auto; margin-top: 100px; border-radius: 15px; border: 10px grey solid; }",
      ".link-news { color: #8BC34A; }",
      ".article-image { height: 100%; width: 100%; }"
  ]
})
export class HomeComponent {
}
