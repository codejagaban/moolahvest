import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    
  }
];

@NgModule({
  imports: [RouterModule,IonicModule,FormsModule,CommonModule],
  exports: [RouterModule,IonicModule,FormsModule,CommonModule]
})
export class SharedModule {}
