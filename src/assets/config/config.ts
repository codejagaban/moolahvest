import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAppConfig } from './AppConfig';
@Injectable()
 export class Config {
 constructor(private http: HttpClient) {
 }
 static settings: IAppConfig;
 private _config: Object;
 private _env: Object;
 load() {
     const jsonFile = `assets/config/config.${environment.name}.json`;
     return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : IAppConfig) => {
               Config.settings = response as IAppConfig;
               resolve();
            }).catch((response: any) => {
               reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
 }
 getEnv(key: any) {
   return this._env[key];
 }
 get(key: any) {
   return this._config[key];
 }


};
