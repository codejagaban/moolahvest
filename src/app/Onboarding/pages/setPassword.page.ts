import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { slideInRight } from 'src/app/animations';
import { Genders, OnboardingUser } from '../models/user.model';
import { OnboardingService } from '../onboaring.services';


@Component({
    selector: 'app-onboard-setpassword',
    styleUrls: ['../styles/password.scss'],
    animations: [slideInRight],
    templateUrl : '../views/setPassword.html'
})
export class SetPasswordPage implements OnInit, OnDestroy {
    @Input() boardForm: FormGroup;
    // userSub: Subscription;
    // gender =Genders;
    // user: OnboardingUser = {
    //     DateOfBirth : new Date(),
    //     countryCode : '',
    //     firstName : '',
    //     surName : '',
    //     otherNames : '',
    //     phoneNumber : '',
    //     email : '',
    //     gender : this.gender.Female
    // };
 constructor(private onboardingService: OnboardingService){
    //  this.userSub = onboardingService.user.subscribe(user=> {
    //   this.user = user;
    //  });
 }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }
    ngOnDestroy(): void {
        // if(this.userSub){
        //  this.userSub.unsubscribe();
        // }
    }
}