import { Component, OnInit, OnDestroy } from '@angular/core';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrls: ['./coupon-detail.component.css']
})
export class CouponDetailComponent implements OnInit {
  
  coupon: any;

  constructor(private _couponService: CouponService) { }

  ngOnInit() {
    this.coupon = this._couponService.getCoupon();  
  }

  OnDestroy(){
    this._couponService.setCoupon(undefined);
  }

}
