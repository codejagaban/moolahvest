import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genders, OnboardingUser } from '../models/user.model';
import { OnboardingService } from '../onboaring.services';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-onboard-otp',
    styleUrls: [ '../styles/otp.scss'],
    templateUrl: '../views/otp.html'
})
export class OtpPage implements OnInit, OnDestroy {
    @Input() boardForm: FormGroup;
    userSub: Subscription;
    gender = Genders;
    user: OnboardingUser = {
        DateOfBirth : new Date(),
        countryCode : '',
        firstName : '',
        surName : '',
        otherNames : '',
        phoneNumber : '',
        email : '',
        gender : this.gender.Female
    };
 constructor(private onboardingService: OnboardingService){
     this.userSub = onboardingService.user.subscribe(user => {
      this.user = user;
     });
 }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }
    ngOnDestroy(): void {
        if (this.userSub){
         this.userSub.unsubscribe();
        }
    }
    onOtpChange(e) {
        console.log(e);
    }
}
