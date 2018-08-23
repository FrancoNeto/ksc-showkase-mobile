import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';
import { CouponValidateComponent } from './coupon-validate/coupon-validate.component';
import { CoreComponent } from './core.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CouponDetailGuard } from './guards/coupon.detail.guard';

const coreRoutes: Routes = [
    {
        path: '',
        redirectTo: 'coupon-validate',
        pathMatch: 'full'
    },
    {
        path: '',
        component: CoreComponent,
        children: [
            {
                path: 'coupon-validate', 
                component: CouponValidateComponent
            },
            {
                path: 'coupon-detail', 
                component: CouponDetailComponent,
                canActivate: [CouponDetailGuard]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class CoreRoutingModule { }
