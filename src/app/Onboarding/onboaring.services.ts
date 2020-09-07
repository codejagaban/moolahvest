import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/Api.services';
import { Injectable } from '@angular/core';
import { Config } from 'src/assets/config/config';


@Injectable({
  providedIn :'root'
})
export class OnboardingService extends ApiService<any> {
baseUrl: string = `${Config.settings.apiServer.SavingsUrl}/onboarding`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  withoutBvn(query: any ) {
    return this.GetDataWithFilter(query, `${this.baseUrl}/withoutBVN`);
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
