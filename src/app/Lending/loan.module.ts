import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { LoansPage } from './pages/loans.page';

const routes: Routes = [
  {
      path: '',
      component: LoansPage,
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: []
})
export class LoansModule {}
