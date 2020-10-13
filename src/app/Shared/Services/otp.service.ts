import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/Api.services';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class OtpService extends ApiService<any> {


  constructor(public httpClient: HttpClient) {
    super(httpClient);
    }


    VerifyOtp(model:any, route:string){
      return this.post(model,route);
    }
    ResendOtp(model:any, route: string){
     return  this.post(model,route);
    }
}
