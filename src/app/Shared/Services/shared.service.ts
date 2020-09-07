import { Injectable } from '@angular/core';
import { ApiService } from './Api.services';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../models/ApiResponse';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedServices extends  ApiService<any> {

  constructor(protected httpClient: HttpClient){
    super(httpClient);
  }
  GetallStates(): Observable<ApiResponse<any>>{
    return this.GetAll('/api/Shared/GetllStates');
  }

}
