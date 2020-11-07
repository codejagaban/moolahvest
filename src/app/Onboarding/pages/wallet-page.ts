import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-onboard-wallet',
	styleUrls: ['../styles/wallet.scss'],
	templateUrl: '../views/wallet.html'
})
export class WalletPage implements OnInit{
	@Input() boardForm: FormGroup;
	constructor() {  }
	ngOnInit() { }
	onClick(){
		console.log(this.boardForm);
	}

}
