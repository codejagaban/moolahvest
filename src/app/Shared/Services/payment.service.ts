import { Config } from './../../../assets/config/config';
import { ApiService } from 'src/app/shared/services/Api.services';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class CardPaymentServices extends ApiService<any> {

  private paymentUrl = `${Config.settings.apiServer.PaymentsUrl}/api/v1/cards`;
  constructor(public httpClient: HttpClient) {
  super(httpClient);
  }

  GetPaymentOption(){
    return this.GetAll(`${this.paymentUrl}/provider`);
  }
  GetUserCards(){
    return this.GetAll(`${this.paymentUrl}/getusercards`);
  }
  GetUserCardsAndBankAccounts(){
    return this.GetAll(`${this.paymentUrl}/getusercardsandBankAccounts`);
  }
  GenerateReference(){
    return this.GetAll(`${this.paymentUrl}/generateRef`);
  }

  addCard(model:any){
    return this.create(model,`${this.paymentUrl}/addcard`);
  }

  GetUserBankAccounts() {
    return this.GetAll(`${this.paymentUrl}/getuseraccounts`);
  }

  GetBanks(){
    return this.GetAll(`${this.paymentUrl}/getallbanks`);
  }
  verifyAccount(bankCode, accountNumber){
   return this.GetAll(`${this.paymentUrl}/verifybankAccount/${bankCode}/${accountNumber}`);
  }

  addBankAccount(model: any){
    return this.create(model, `${this.paymentUrl}/addbankaccount`)
  }
}
