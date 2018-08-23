import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {
  
  user: any;
  authToken: string

  constructor() { }

  setAuthenticatedUser (user) {
    sessionStorage.user = user;
  }

  setAuthenticatedToken(authToken) {
    sessionStorage.token = authToken;
  }

  getAuthenticatedUser() {
    if (sessionStorage.user) {
        return sessionStorage.user;
    }
    return undefined;
  }

  getAuthenticatedToken() {
    if (sessionStorage.token) {
      return sessionStorage.token;
    }  
    return undefined;
  }

  hasAuthorization (authorization) {
    var user = this.getAuthenticatedUser();
    var result = false;
    if (user !== undefined) {
      if (authorization instanceof Array) {
        for (var i = 0; i < authorization.length; i++) {
          if (user.permissions.indexOf(authorization[i]) > -1) {
          result = true;
          break;
          }
        }
      } else if (user.permissions.indexOf(authorization) > -1) {
        result = true;
      }
    }
  return result;
  }

  clearAuthenticatedUser() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }
}
