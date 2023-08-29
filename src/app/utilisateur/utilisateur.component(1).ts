import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faCoffee, faFilm } from '@fortawesome/free-solid-svg-icons';
import { MabanqueService } from '../mabanque.service';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  faCoffee = faCoffee;
  filmIcon = faFilm;
  comptes : any;  
  nom : any = localStorage.getItem('nom');
  name : any;
  numeroCompte:Array<string> =[];
  solde : Array<number> =[];
  devise: Array<string> = [];
  longueur ?: number;

//   solde ?: number;
//   devise ? : string;
//   numeroCompte ?: string;

  constructor(
    private banqueService : MabanqueService,
    
  ) { }

  ngOnInit(): void {
     this.ListerCompte(this.nom);

  }

  Logout(): void
  {
     console.log('ca marche');
  }

  ListerCompte(nom : any)
  { 
     this.banqueService.getAllClientWithCompte(this.nom).subscribe(data=>{
           this.comptes = data;
           this.longueur = this.comptes.length;
     });
  }
  
  // ListerOperation(numcompte : string)
  // {
  //     this..navigateForward('operation/'+numcompte);
  // }
}
