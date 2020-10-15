import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'src/assets/config/config';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { OnboardingUser } from './models/user.model';
import { ApiService } from '../shared/services/Api.services';

@Injectable({
  providedIn : 'root'
})
export class OnboardingService extends ApiService{
baseUrl = `${Config.settings.apiServer.OnboardingUrl}`;
private users = new BehaviorSubject<OnboardingUser>(null);
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  get user(){
    return this.users.asObservable();
  }
  withoutBvn(user: OnboardingUser ) {
    return this.post<any>(user, `${this.baseUrl}/withoutBVN`).pipe(
      map( () => {
      this.users.next(user);
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
setPIN(model: any){
  return this.post<any>(model,`${Config.settings.apiServer.ProfileUrl}/Create`);
}
}
