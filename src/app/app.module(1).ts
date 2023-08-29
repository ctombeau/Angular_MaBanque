import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { ClientComponent } from './client/client.component';
import { OperationComponent } from './operation/operation.component';
import { MoncashComponent } from './moncash/moncash.component';
import { VirementComponent } from './virement/virement.component';
import { TransfertComponent } from './transfert/transfert.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Virement2Component } from './virement2/virement2.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';



@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    HomeComponent,
    ClientComponent,
    OperationComponent,
    MoncashComponent,
    VirementComponent,
    TransfertComponent,
    HeaderComponent,
    FooterComponent,
    Virement2Component,
    AjouterClientComponent,
    ModifierClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }
 }
