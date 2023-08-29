import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LoginGuard implements CanActivate{
    constructor(
        //private banqueService : MabanqueService,
        private router: Router
      ) { }

    canActivate(
         next: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
       // throw new Error("Method not implemented.");

       const token = localStorage.getItem('token');
       console.log(next);
       if (!!token !== true)
        {
            this.router.navigate(['']);
            return false;
        }
       return  (!! token);
         
    }

}