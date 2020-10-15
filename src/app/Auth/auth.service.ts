import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Config } from 'src/assets/config/config';
import { ClientModel } from './auth.model';
import { Platform } from '@ionic/angular';

@Injectable()
export class AuthServices{

  constructor(private platform: Platform){}
    private storeAuthData(userId: string, token: string, expiresIn: number){

        const data = JSON.stringify({userId, token, expiresIn});
        Plugins.Storage.set({key: 'authData', value: data});
    }


     loginAsUser(userModel: any){
      const client = this.GetClientCredentials();
      const params = new HttpParams({
            fromObject: {
              grant_type: 'password',
              username: userModel.userName,
              password: userModel.password,
              client_id: client.clientId,
              client_secret: client.clientSecret
            }
          });
      const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          };
    }

     loginAsClient(){
      const client = this.GetClientCredentials();
      const params = new HttpParams({
            fromObject: {
              grant_type: 'client_credentials',
              client_id: client.clientId,
              client_secret: client.clientSecret
            }
          });
      const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          };
    }
    private  GetClientCredentials(): ClientModel{
if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
return new ClientModel(Config.settings.apiServer.clientId, Config.settings.apiServer.clientSecret);
}
return new ClientModel(Config.settings.apiServer.mobileClientId, Config.settings.apiServer.mobileClientSecret);
    }
}

