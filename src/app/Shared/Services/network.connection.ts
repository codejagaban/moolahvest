import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Injectable } from '@angular/core';

export enum ConnectionStatusEnum {
  Online,
  Offline
}
@Injectable({
  providedIn:'root'
})
export class NetworkConnection {

  public status: ConnectionStatusEnum = ConnectionStatusEnum.Online;
  private  online$: Observable<any>;
  private  offline$: Observable<any>;

  public  init() {
    this.online$ = Observable.fromEvent(window, 'online');
    this.offline$ = Observable.fromEvent(window, 'offline');

    this.online$.subscribe(e => {
      console.log('Online',e);
     this.status = ConnectionStatusEnum.Online;
    });

    this.offline$.subscribe(e => {
      console.log('Offline');
      this.status = ConnectionStatusEnum.Offline;
    });
  }

  constructor() {
   this.init();
  }

}
