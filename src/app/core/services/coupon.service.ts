import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from './../../app.settings';

@Injectable()
export class CouponService {
  
  couponValidated: any;

  constructor(private _http: HttpClient) { }
  
  validateCoupon(model){
    return this._http.post<any>(`${AppSettings.API_ENDPOINT}/flyer/api/coupon/validate`, model);
  }

  reddemCoupon() {

  }

  setCoupon(coupon) {
    this.couponValidated = coupon;
  }
  
  getCoupon() {
    return this.couponValidated;
  }
}
