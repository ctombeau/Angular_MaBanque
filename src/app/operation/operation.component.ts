import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MabanqueService } from '../mabanque.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  nom : any = localStorage.getItem('nom');
  numcompte : string;
  operation : any;
  compte : any;

  constructor(
    private route : ActivatedRoute,
    private mabanqueService : MabanqueService
  ) { 
      this.numcompte = this.route.snapshot.params.numcompte;
  }

  ngOnInit(): void {
    this.ListerOperation();
    this.ListerCompte();
    //console.log(this.ListerOperation());
    
  }

  Logout()
  {

  }

  ListerOperation()
  {  console.log("numcompte: "+this.numcompte);
      this.mabanqueService.getOperationWithCompte(this.numcompte).subscribe(data=>{
          this.operation = data;
          console.log(data);
      });
  }

  ListerCompte()
  {
      this.mabanqueService.getComptes(this.nom).subscribe(data=>{
        this.compte = data;
      });
  }

  ShowOperation(event:any)
  {
     console.log("Voici le numéro de compte: "+ event.target.value.split(' ')[0]);
     this.numcompte = event.target.value.split(' ')[0];
     this.mabanqueService.getOperationWithCompte(this.numcompte).subscribe(data=>{
          this.operation = data;
     });
  }

}
