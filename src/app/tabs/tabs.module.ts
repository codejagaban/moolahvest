import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
      path:'',
      component: TabsPage,
      children: [
      
          {
              path: 'dashboard',
              loadChildren: () => import('../Dashboard/dashboard.module').then( m => m.DashboardModule)
          },
          {
              path: 'payments',
              loadChildren: () => import('../Payments/payments.module').then( m => m.PaymentsModule)
          },
        {
            path:'',
            redirectTo:'dashboard',
            pathMatch:'full'
        }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [TabsPage]
})
export class TabsModule {}
