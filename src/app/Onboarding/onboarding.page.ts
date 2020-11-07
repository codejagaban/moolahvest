import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-onboard',
	styleUrls: ['/styles/onboard.scss'],
	templateUrl: '/views/onboard.html'
})
export class OnboardPage implements OnInit {
	boardForm: FormGroup;
	constructor(private fb: FormBuilder) {}
	ngOnInit() {
		this.createOnboardForm();
		console.log(this.boardForm);

	}
	createOnboardForm() {
		this.boardForm = this.fb.group({
			walletForm: this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				email: ['', [Validators.required, Validators.pattern(/^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)]],
				phone: [undefined, [Validators.required]],
				dateOfBirth: [undefined, Validators.required]
			}),
			otpForm: this.fb.group({
				otp: ['', Validators.required]
			})
		});
	}

}
