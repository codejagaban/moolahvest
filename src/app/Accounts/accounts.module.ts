import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';

const routes: Routes = [
  {
    path: '',
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class AccountsModule {}
