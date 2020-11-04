import { CommonModule } from '@angular/common';
import { OnboardPage } from './onboarding.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { WalletPage } from './pages/wallet-page';
import { BvnPage } from './pages/bvn-page';
import { OtpPage } from './pages/otp.page';
import { SetPasswordPage } from './pages/setPassword.page';
import { SetPINPage } from './pages/setPIN.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardPage,
    pathMatch: 'full'
  }
  // {
  //   path: '',
  //   children: [
  //     {path: 'wallet',
  //     component: WalletPage,
  //     pathMatch: 'full'
  //   },
  // {
  //   path: 'bvn',
  //   component: BvnPage,
  //   pathMatch: 'full'
  // }]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  declarations: [OnboardPage, WalletPage]
})
export class OnboardingModule {}
