import { slideInRight } from './../../animations';
import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-stepper',
  styleUrls: ['../styles/stepper.scss'],
  animations: [slideInRight],
  templateUrl: '../views/stepper.html',
  providers: [{provide: CdkStepper, useExisting: StepperPage}]
})
export class StepperPage extends CdkStepper implements OnInit {
  @Input() linerModeSelected: boolean;
  ngOnInit(): void {
      this.linear = this.linerModeSelected;
  }

  onClick(index: number){
      this.selectedIndex = index;
      console.log(this.selectedIndex);
  }
}
