import { AppSettings } from './../../app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  constructor(private _http: HttpClient) {}

  loadMyStores() {
    return this._http.get<any>(`${AppSettings.API_ENDPOINT}/admin/api/store/list-all`);
  }

  loadSalesPointsByStoreId(storeId) {
    return this._http.get<any>(`${AppSettings.API_ENDPOINT}/admin/api/sales-point`, { params: new HttpParams()
      .set('storeId', storeId)});
  }
}
