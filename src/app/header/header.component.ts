import { Component, OnInit } from '@angular/core';
import { MabanqueService } from '../mabanque.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  nom : any = localStorage.getItem('nom');
  nomComplet: any = localStorage.getItem('nomComplet');
  name : any;

  constructor(
      private mabanqueService : MabanqueService
  ) { }

  ngOnInit(): void {
    this.nom = localStorage.getItem('nom');
    this.nomComplet = localStorage.getItem('nomComplet');
  }

  Logout(): void
  {
     this.mabanqueService.logout();
  }

}
