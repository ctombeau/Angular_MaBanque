import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.scss']
})
export class TransfertComponent implements OnInit {
  nom : any = localStorage.getItem('nom');
  name : any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  Moncash()
  {
     this.router.navigate(['/moncash']);
  }
  Mabanque()
  {
    this.router.navigate(['/virement2']);
  }
  Compte()
  {
    this.router.navigate(['/virement']);
  }
}
