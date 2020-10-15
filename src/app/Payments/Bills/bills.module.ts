import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';
import { BillersPage } from './pages/billers.page';
import { BillItemsPage } from './pages/billItems.page';
import { BillsPage } from './pages/bills.page';
import { CategoriesPage } from './pages/categories.page';
import { SummaryPage } from './pages/summary.page';
import { ValidatePage } from './pages/validate.page';

const routes: Routes = [
  {
    path: '',
    component: BillsPage,
    pathMatch: 'full'
  },
  {
   path: 'categories',
   component: CategoriesPage,
   pathMatch: 'full'
  },
  {
  path: 'billers/:id',
   component: BillersPage,
    pathMatch: 'full'
    },
  {
  path : 'billeritems/:id',
  component: BillItemsPage,
  pathMatch : 'full'
  },
  {
   path: 'summary',
   component: SummaryPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [BillsPage, CategoriesPage, BillersPage, BillItemsPage, ValidatePage, SummaryPage]
})
export class BillsModule {}
