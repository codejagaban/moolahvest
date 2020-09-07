import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Config } from 'src/assets/config/config';

@Injectable()
export class AuthServices{

    private storeAuthData(userId: string, token: string, expiresIn: number){

        const data = JSON.stringify({userId, token, expiresIn});
        Plugins.Storage.set({key: 'authData', value: data});
    }


    private loginAsUser(userModel: any){
        const params = new HttpParams({
            fromObject: {
              grant_type: 'password',
              username: userModel.userName,
              password: userModel.password,
              client_id: Config.settings.apiServer.clientId,
              client_secret: Config.settings.apiServer.clientSecret
            }
          });
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          };
    }

    private loginAsClient(){
        const params = new HttpParams({
            fromObject: {
              grant_type: 'client_credentials',
              client_id: Config.settings.apiServer.clientId,
              client_secret: Config.settings.apiServer.clientSecret
            }
          });
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          };
    }
}

