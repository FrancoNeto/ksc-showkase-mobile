import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { CouponService } from '../services/coupon.service';


@Injectable()
export class CouponDetailGuard implements CanActivate {

  constructor(
    private _couponService: CouponService,
    private _router: Router
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if(this._couponService.getCoupon()) return true;
      
      this._router.navigate(['login']);
      return false;
  }
}
