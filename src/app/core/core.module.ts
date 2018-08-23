import { CouponDetailGuard } from './guards/coupon.detail.guard';
import { StoreService } from './services/store.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core.routing.module';
import { NavBarComponent } from './../shared/nav-bar/nav-bar.component';
import { CoreComponent } from './core.component';
import { CouponValidateComponent } from './coupon-validate/coupon-validate.component';
import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';
import { FormsModule } from '@angular/forms';
import { InterceptService } from './services/intercept.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CouponService } from './services/coupon.service';
import {MzNavbarModule, MzInputModule, MzSelectModule, MzToastModule } from 'ngx-materialize';

@NgModule({
    imports: [CoreRoutingModule, 
        CommonModule, 
        RouterModule, 
        FormsModule,
        MzNavbarModule,
        MzInputModule,
        MzSelectModule,
        HttpClientModule,
        MzToastModule],
    exports: [],
    declarations: [NavBarComponent, CoreComponent, CouponValidateComponent, CouponDetailComponent],
    providers: [
        InterceptService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptService,
        multi: true
      },
      CouponService,
      StoreService,
      CouponDetailGuard
    ]
})
export class CoreModule { }
