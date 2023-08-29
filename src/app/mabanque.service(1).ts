import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MabanqueService {
   token : any = "";
   headers = new HttpHeaders({
     'token' : this.token,
     'content-type': 'application/json'
   });

   baseUrl = 'http://localhost:8000/api';

  constructor( 
    private http : HttpClient
  ) { }

  postLogin(login : any)
  {
     console.log("Dans service: "+login.password);
     return this.http.post(this.baseUrl+"/connexion",JSON.stringify(login),{headers: this.headers});
  }

  getAllClientWithCompte(nom : string)
  {
    return this.http.get(this.baseUrl+"/client/"+nom,{headers : this.headers});
  }

  getOperationWithCompte(numcompte : string)
  {
    return this.http.get(this.baseUrl+"/operation/"+numcompte,{headers : this.headers});
  }
  getComptes(pseudo : string)
  {
    return this.http.get(this.baseUrl+"/comptes/"+pseudo,{headers : this.headers});
  }

  postVirement(data : any)
  {
     return this.http.post(this.baseUrl+"/virement",JSON.stringify(data),{headers : this.headers});
  }

  getCompteBene(pseudo : string)
  {
     return this.http.get(this.baseUrl+"/compte/bene/"+pseudo,{headers:this.headers});
  }

  postBeneCompte(data : any)
  {
     return this.http.post(this.baseUrl+"/ajout/compte",JSON.stringify(data),{headers:this.headers});
  }

  postBeneMoncash(data : any)
  {
     return this.http.post(this.baseUrl+"/ajout/moncash",JSON.stringify(data),{headers:this.headers});
  }

  getBeneficiaireCompte(numCompte : String)
  {
      return this.http.get(this.baseUrl + "/beneficiaire/"+numCompte,{headers:this.headers});
  }

  logout()
  {
     localStorage.removeItem('token');
  }
}
