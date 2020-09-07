import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { WalletPage } from './pages/wallet-page';

const routes: Routes = [
  {
    path: 'wallet',
    component: WalletPage,
    pathMatch :'full'
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations:[WalletPage]
})
export class OnboardingModule {}
