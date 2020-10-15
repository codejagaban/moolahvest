import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CdkStepperModule} from '@angular/cdk/stepper';
import { StepperPage } from './components/stepper.page';
const routes: Routes = [
  {
    path: '',
  }
];

@NgModule({
  declarations: [StepperPage],
  imports: [RouterModule, IonicModule, FormsModule, CommonModule, CdkStepperModule],
  exports: [RouterModule, IonicModule, FormsModule, CommonModule, CdkStepperModule, StepperPage]
})
export class SharedModule {}
