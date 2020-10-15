import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { PaymentsPage } from './pages/payments.page';


const routes: Routes = [
  {
      path: '',
      component: PaymentsPage,
      pathMatch: 'full'
 
  },
  {
    path: 'bills',
    loadChildren: () => import('./Bills/bills.module').then( m => m.BillsModule)
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [PaymentsPage]
})
export class PaymentsModule {}
