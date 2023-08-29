import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MabanqueService } from '../mabanque.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {
  nom : any = localStorage.getItem('nom');
  name : any;
  bene : any;
  beneCompte: any;
  nomPrenom : string = "";
  numCompte : string= "";


  constructor(private maBanqueService : MabanqueService) { }

  ngOnInit(): void {
     this.ListerBeneCompte();
  }

  ModifierClient(form: NgForm)
  {

  }

  ListerBeneCompte()
  {
     this.maBanqueService.getCompteBene(this.nom).subscribe(data=>{
            this.bene = data;
            console.log(this.bene);
     });
  }

  ShowBene(event : any)
  {
      //console.log(event.target.value);
      this.maBanqueService.getBeneficiaireCompte(event.target.value).subscribe(data=>{
            this.beneCompte = data;
            this.nomPrenom = this.beneCompte[0].nomPrenom;
            this.numCompte = this.beneCompte[0].numCompte;
            console.log(this.beneCompte[0].nomPrenom);
      })
  }

}
