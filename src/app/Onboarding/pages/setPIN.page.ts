import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Genders, OnboardingUser } from '../models/user.model';
import { OnboardingService } from '../onboaring.services';


@Component({
    selector: 'app-onboard-setpin',
    styleUrls: ['../styles/pin.scss'],
    templateUrl: '../views/setPIN.html'
})
export class SetPINPage{
  @Input() boardForm: FormGroup;
    // userSub: Subscription;
    // pinModel :any = {};
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
 constructor(private onboardingService: OnboardingService, private navCtrl: NavController, private router: Router){}

    ngOnInit(): void {
        // this.userSub = this.onboardingService.user.subscribe(user=> {
        //     this.user = user;
        //    });
    }

    setPIN(){
    //  this.onboardingService.setPIN(this.pinModel).subscribe(res => {
    //   //take user to dashboard
    //   this.router.navigateByUrl('/dashboard');
    //  });
    }
    ngOnDestroy(): void {
        // if(this.userSub){
        //  this.userSub.unsubscribe();
        // }
    }
}