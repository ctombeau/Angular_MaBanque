import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MabanqueService } from '../mabanque.service';

@Component({
  selector: 'app-virement2',
  templateUrl: './virement2.component.html',
  styleUrls: ['./virement2.component.scss']
})
export class Virement2Component implements OnInit {

  nom : any = localStorage.getItem('nom');
  name : any;
  transfert : string ="";
  form : any;
  compte : any;
  response : any;
  bene : any;
  id : number =0;
  messageDevise : string = "";

  constructor(private banqueService : MabanqueService,
        private router : Router,
        private route : ActivatedRoute) { 
          
        }

  ngOnInit(): void {
    this.transfert = "A UN TIERS MABANQUE";
    this.ListerCompte();
    this.ListerCompteBene();
    this.form = new FormGroup ({
      
    });
    this.id = this.route.snapshot.params['id'];
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
             console.log(this.response);
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

  ListerCompteBene()
  {
     this.banqueService.getCompteBene(this.nom).subscribe(data=>{
           this.bene = data;
           console.log(this.bene);
     });
  }
}
