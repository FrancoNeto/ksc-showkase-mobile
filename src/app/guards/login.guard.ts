import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './../shared/services/security.service';

@Injectable()
export class LoginGuard implements CanActivate {
  
  constructor(
    private _securityService: SecurityService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this._securityService.getAuthenticatedToken() && this._securityService.getAuthenticatedToken()){
      this._router.navigate(['/app/coupon-validate']);      
      return false;  
    }
    
    return true;

  }
}
