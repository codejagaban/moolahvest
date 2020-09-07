import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/Api.services';
import { Injectable } from '@angular/core';
import { Config } from 'src/assets/config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn :'root'
})
export class OnboardingService extends ApiService<any> {
baseUrl: string = `${Config.settings.apiServer.SavingsUrl}/onboarding`;

public user:any;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  withoutBvn(user: any ) {
    return this.create(user, `${this.baseUrl}/withoutBVN`).pipe(
      map(user=> {
       this.user = user;
      })
    );
  }
validateOTP(model: any ){
    return this.create(model,`${Config.settings.apiServer.SavingsUrl}/validateOTP`);
}
resentOTP(model: any){
    return this.create(model,`${Config.settings.apiServer.SavingsUrl}/ResendOTP`);
}
setPassword(model:any){
    return this.create(model,`${Config.settings.apiServer.SavingsUrl}/SetPassword`);
}
}
