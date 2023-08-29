import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MabanqueService } from '../mabanque.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   userCredential : any;

  constructor(
    private banqueService : MabanqueService
  ) { }

  ngOnInit(): void {
  }

  Login(form : NgForm)
  {
      const login ={
         username : form.value("name"),
         password : form.value("pass")
      }

      this.banqueService.postLogin(login).subscribe(data=>{
           this.userCredential = data;
           
      });
  }

}
