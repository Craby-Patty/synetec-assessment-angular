import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CitiesEndpoint extends BaseService {

  public baseUrl = 'http://localhost:53539'; // Local environment
  // public baseUrl = ''; // Hosted environment

  constructor(private _httpClient: HttpClient, private _injector: Injector) {
    super(_httpClient, _injector);
  }

  getCities() {
    return this._httpClient.get(this.baseUrl + '/api/Cities');
  }

  delCity(id) {
    return this._httpClient.delete(this.baseUrl + '/api/Cities/delete-city/' + id);
    //return this._httpClient.get(encodeURIComponent(this.baseUrl + '/api/Cities/delete-city/' + id));
  }


}
