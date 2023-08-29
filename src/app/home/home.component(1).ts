import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MabanqueService } from '../mabanque.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    res : any;

  constructor(
    private banqueService : MabanqueService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  Login(form : NgForm)
  {
      const login ={
         username : form.value['name'],
         password : form.value['pass']
      }
      
      this.banqueService.postLogin(login).subscribe(data=>{
           console.log("Dans login: " +data);
           this.res = data;
           if(this.res['code']== 0 || this.res['code']== 1 || this.res['code'] == 2 )
           {
              localStorage.setItem('nom',this.res['nom']);
              localStorage.setItem('token',this.res['token']);
              localStorage.setItem('nomComplet',this.res['nomComplet']);
              console.log(this.res['token']);
              this.router.navigate(['/utilisateur']);
           }
                 
      });
      
  }

}
