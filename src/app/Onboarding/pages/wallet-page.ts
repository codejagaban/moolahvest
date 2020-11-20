import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboard-wallet',
  styleUrls: ['../styles/wallet.scss'],
  templateUrl: '../views/wallet.html'
})
export class WalletPage implements OnInit{
  constructor() {  }
  @Input() boardForm: FormGroup;
  // calculate the most possible 18 years from today
  today = new Date()
  maxDate = new Date(this.today.getFullYear()-18, this.today.getMonth(), this.today.getDate());
  ngOnInit() {
  }
  get wForm() {
    return this.boardForm.controls.walletForm
  }
  onClick(){
    console.log(this.boardForm);
  }

}
