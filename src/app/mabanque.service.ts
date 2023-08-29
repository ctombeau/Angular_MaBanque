import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MabanqueService {
   token : any= localStorage.getItem('token');
   headers = new HttpHeaders({
     'token' : this.token,
     'content-type': 'application/json'
   });

   baseUrl = 'http://localhost:8080/Api_MaBanque/MaBanque/connexion';

  constructor(
    private http : HttpClient
  ) { }

  postLogin(login : any)
  {
     return this.http.post(this.baseUrl+"/connexion",JSON.stringify(login),{headers: this.headers});
  }
}
