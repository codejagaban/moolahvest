import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CdkStepperModule} from '@angular/cdk/stepper';
import { StepperPage } from './components/stepper.page';
import { TextInputPage } from './components/text-input.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgOtpInputModule } from 'ng-otp-input';


const routes: Routes = [
  {
    path: '',
  }
];

@NgModule({
  declarations: [StepperPage, TextInputPage],
  imports: [
    RouterModule,
    IonicModule,
    FormsModule,
    NgxMatIntlTelInputModule,
    NgOtpInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    CdkStepperModule,
    ReactiveFormsModule],
  exports: [
    RouterModule,
    IonicModule,
    FormsModule,
    NgxMatIntlTelInputModule,
    NgOtpInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    CdkStepperModule,
    StepperPage,
    TextInputPage,
    ReactiveFormsModule]
})
export class SharedModule {}
