import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/Api.services';
import { Injectable } from '@angular/core';
import { Config } from 'src/assets/config/config';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class OnboardingService extends ApiService{
baseUrl = `${Config.settings.apiServer.OnboardingUrl}`;
public user: any= new BehaviorSubject(null);
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  withoutBvn(user: any ) {
    return this.post<any>(user, `${this.baseUrl}/withoutBVN`).pipe(
      map( response => {
       this.user = response.payload;
      })
    );
  }
validateOTP(model: any ){
    return this.post<any>(model, `${this.baseUrl}/validateOTP`);
}
resentOTP(model: any){
    return this.post<any>(model, `${this.baseUrl}/ResendOTP`);
}
setPassword(model: any){
    return this.post<any>(model, `${Config.settings.apiServer.OnboardingUrl}/SetPassword`);
}
}
