import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { DashboardPage } from './pages/dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [DashboardPage]
})
export class DashboardModule {}
