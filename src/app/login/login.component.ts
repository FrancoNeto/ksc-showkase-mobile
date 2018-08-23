import { Router } from '@angular/router';
import { SecurityService } from './../shared/services/security.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private _securityService: SecurityService, private _router: Router) { }
  
  credential: credentials = {};

  ngOnInit() {
  }
  
  onSubmit(form) {
    if(form.valid) {
      this.authenticate();
    }
  }

  authenticate() {
    this._auth.authenticate(this.credential).subscribe(result => {
      this._securityService.setAuthenticatedUser(result);
      this._router.navigate(['/app/coupon-validate']);
    });
  }
}

interface credentials {
  usernameOrEmail?: String,
  password?: String
}