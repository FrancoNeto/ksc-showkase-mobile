import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './../shared/services/security.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _securityService: SecurityService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if(this._securityService.getAuthenticatedUser() && this._securityService.getAuthenticatedToken()) return true;
      
      this._router.navigate(['/login']);
      
      return false;
  }
}
