import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MabanqueService } from '../mabanque.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent implements OnInit {

  nom : any = localStorage.getItem('nom');
  name : any;
  transfert : string ="";
  form : any;
  compte : any;
  response : any;

  constructor(private banqueService : MabanqueService,
        private router : Router) { }

  ngOnInit(): void {
    this.transfert = "ENTRE MES COMPTES MABANQUE";
    this.ListerCompte();
    this.form = new FormGroup ({
      
    });
  }

  AjouterClient(form : NgForm)
  {
      const bene ={
          nom: form.value['nom'],
          numCompte: form.value['numero'],
          pseudo : this.nom
      }
     // console.log(bene);
       this.banqueService.postBeneCompte(bene).subscribe(data=>{
              this.response = data;
            if(this.response['code']==1)
            {
                this.router.navigate(['virement2']);
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
