import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { WalletPage } from './pages/wallet-page';
import { BvnPage } from './pages/bvn-page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wallet',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {path: 'wallet',
      component: WalletPage,
      pathMatch: 'full'
    },
  {
    path: 'bvn',
    component: BvnPage,
    pathMatch: 'full'
  }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [WalletPage, BvnPage]
})
export class OnboardingModule {}
