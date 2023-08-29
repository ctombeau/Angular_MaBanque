import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ClientComponent } from './client/client.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { HomeComponent } from './home/home.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { MoncashComponent } from './moncash/moncash.component';
import { OperationComponent } from './operation/operation.component';
import { TransfertComponent } from './transfert/transfert.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { VirementComponent } from './virement/virement.component';
import { Virement2Component } from './virement2/virement2.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path: 'utilisateur', component: UtilisateurComponent, canActivate : [LoginGuard]},
  {path:'client', component: ClientComponent, canActivate : [LoginGuard]},
  {path:'operation/:numcompte', component: OperationComponent, canActivate : [LoginGuard]},
  {path:'virement',component:VirementComponent, canActivate : [LoginGuard]},
  {path:'moncash',component:MoncashComponent, canActivate : [LoginGuard]},
  {path:'transfert',component:TransfertComponent, canActivate : [LoginGuard]},
  {path:'virement2',component:Virement2Component, canActivate : [LoginGuard]},
  {path:'client/ajout',component:AjouterClientComponent, canActivate : [LoginGuard]},
  {path:'client/update',component:ModifierClientComponent, canActivate : [LoginGuard]},
  //{path:'**', component : ErrorComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
