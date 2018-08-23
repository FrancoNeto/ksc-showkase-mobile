import { Injectable } from '@angular/core';
import { AppSettings } from './../app.settings';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SecurityService } from './../shared/services/security.service';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _securityService: SecurityService, private _router: Router) {}

  authenticate(credentials) {
    return this._http.post<any>(`${AppSettings.API_ENDPOINT}/api/authenticate`, credentials).pipe(
      map(response => {
        this._securityService.setAuthenticatedToken(response.id_token);
        return response;
      }),
      mergeMap(response => this.getAccount())
    );
  }

  private getAccount() {
    return this._http.get<any>(`${AppSettings.API_ENDPOINT}/api/account`);
  }

  logout() {
    this._securityService.clearAuthenticatedUser();
    //this._router.navigate(['/login']);
  }
}
