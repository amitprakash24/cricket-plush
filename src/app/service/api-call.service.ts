import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }
// all backend create method declear need to call here to perform operation   

    getAllMatches()
    {
      return this._httpClient.get(`${environment.apiUrl}/match`)
    }
    getLiveMatches()
    {
      return this._httpClient.get(`${environment.apiUrl}/match/live`)
    }
    getPointTables()
    {
      return this._httpClient.get(`${environment.apiUrl}/match/point-table`)
    }
  }

