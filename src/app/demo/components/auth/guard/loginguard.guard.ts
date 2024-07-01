// import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivateFn, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/demo/service/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class loginguardGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private loginService: LoginService) { }

  public isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') == "true";
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn()) {
      return true;
    }
    return this.router.createUrlTree(['/']);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(childRoute, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean | UrlTree {
    if (this.loginService.isLoggedin()) {
      const rpt_code = this.loginService.get_rpt_code();
      if (route.data['rpt_code'] && route.data['rpt_code'].indexOf(rpt_code) === -1) {
        return this.router.createUrlTree(['auth/login']);
      }
      return true;
    }
    return this.router.createUrlTree(['auth/login']);
  }

};
