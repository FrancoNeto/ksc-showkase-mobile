import { map } from 'rxjs/operators';
import { CouponService } from './../services/coupon.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { StoreService } from '../services/store.service';
import { tap } from 'rxjs/operators';

declare var $:any;

@Component({
  selector: 'app-coupon-validate',
  templateUrl: './coupon-validate.component.html',
  styleUrls: ['./coupon-validate.component.css']
})
export class CouponValidateComponent implements OnInit, OnDestroy,  AfterViewInit {
  
  validateSubscribe: Subscription;
  subscribe: Subscription;
  showStoresSelect: boolean = true;

  stores$:Observable<any>;
  salesPoints$: Observable<any>;

  selectedStore: number;
  
  model: validateFields = {};

  constructor(private _route: ActivatedRoute,
  private _router: Router,
  private _couponService: CouponService,
  private _storeService: StoreService) { }

  ngOnInit() {
    
    this.subscribe = this._route.queryParams.subscribe((queryParams: any) => {
      if(queryParams) {
        this.model.dynamicCode = queryParams['code'];
      }
    }); 
    this.loadMyStores();
  }

  ngAfterViewInit() {
    //$('select').formSelect();
  }
  
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
    this.validateSubscribe.unsubscribe();
  }
  
  onSubmit(form) {
    if(form.valid) {
      this.validateCoupon();
    }
  }

  validateCoupon() {
    this.validateSubscribe = this._couponService.validateCoupon(this.model).subscribe((response) => {
      this._couponService.setCoupon(response);
      this._router.navigate(['/app/coupon-detail']);
    });
  }

  loadMyStores () {
    this.stores$ = this._storeService.loadMyStores()
    .pipe(
      tap((response) => {
        if(response instanceof Array) {
          if(response.length <= 1) {
            this.showStoresSelect = false;
            this.selectedStore = response[0].id;
            this.loadSalesPoint();
          }
        }
      })
    );
  }

  loadSalesPoint(){
    this.salesPoints$ = this._storeService.loadSalesPointsByStoreId(this.selectedStore);
  }
}

interface validateFields {
   dynamicCode?: String;
   salesPointId?: String;
}