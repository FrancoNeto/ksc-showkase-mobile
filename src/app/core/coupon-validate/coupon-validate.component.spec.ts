import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponValidateComponent } from './coupon-validate.component';

describe('CouponValidateComponent', () => {
  let component: CouponValidateComponent;
  let fixture: ComponentFixture<CouponValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
