import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moncash',
  templateUrl: './moncash.component.html',
  styleUrls: ['./moncash.component.scss']
})
export class MoncashComponent implements OnInit {
  nom : any = localStorage.getItem('nom');
  name : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
