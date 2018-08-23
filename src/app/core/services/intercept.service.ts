import { MzToastService } from 'ngx-materialize';
import { SecurityService } from './../../shared/services/security.service';
import { Injectable } from '@angular/core';

import {
  HttpEvent, 
  HttpInterceptor, 
  HttpHandler, 
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';


@Injectable()
export class InterceptService  implements HttpInterceptor {

	constructor(private toastService: MzToastService, private _securityService: SecurityService) { }

	// intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
	
		 // do something on success
		 var token = this._securityService.getAuthenticatedToken();

		 if (token) {
				 // modify request
	  		request = request.clone({
	    		setHeaders: {
	      		Authorization: `Bearer ${token}`
	    		}
	  		});
		 }
	   
	  return next.handle(request)
	    .pipe(
	        tap(event => {
	          if (event instanceof HttpResponse) {
	             
	            console.log(" all looks good");
	            // http response status code
	            console.log(event.status);
	          }
	        }, error => {
             this.showError('Access forbiden');
	   			// http response status code
	          	console.log("----response----");
	          	console.error("status code:");
	          	console.error(error.status);
	          	console.error(error.message);
	          	console.log("--- end of response---");

	        })
	      )
    };

    showError(msg) {
			this.toastService.show(msg, 4000, 'green');
    }
}