import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'utilisateur', component: UtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
