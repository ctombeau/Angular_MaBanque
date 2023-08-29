import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MabanqueService } from '../mabanque.service';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.scss']
})
export class VirementComponent implements OnInit {
  nom : any = localStorage.getItem('nom');
  name : any;
  transfert : string ="";
  form : any;
  compte : any;
  response : any;
  messageDevise: string="";

  constructor(private banqueService : MabanqueService,
        private router : Router) { }

  ngOnInit(): void {
    this.transfert = "ENTRE MES COMPTES MABANQUE";
    this.ListerCompte();
    this.form = new FormGroup ({
      
    });
  }

  VirerCompte(form : NgForm)
  {
      const virement ={
          cpteOrigine: form.value['origine'],
          cpteDestination: form.value['destination'],
          montant: form.value['montant']
      }

      
       this.banqueService.postVirement(virement).subscribe(data=>{
            this.response = data;
            if(this.response['code']==1)
            {
                const link = ['utilisateur']
                this.router.navigate(link);
            }
            else if(this.response['code']==0)
            { 
               this.messageDevise = "Les deux comptes n'ont pas la même devise"
               console.log("Les deux comptes n'ont pas la même devise");
            }
            else if (this.response['code']==-1)
            {

            }
       });

  }

  ListerCompte()
  {
    this.banqueService.getComptes(this.nom).subscribe(data=>{
      this.compte = data;
    });
  }
   
}
