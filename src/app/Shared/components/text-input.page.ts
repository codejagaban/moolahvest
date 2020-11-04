import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';


@Component({
	selector : 'app-text-input',
	styleUrls: ['../styles/text-input.scss'],
    templateUrl : '../views/text-input.html'
})
export class TextInputPage implements OnInit, ControlValueAccessor {

    @ViewChild('input',{static:true},) input: ElementRef;
    @Input() type = 'text';
    @Input() label: string;
    constructor(@Self() public controlDir: NgControl ){
        this.controlDir.valueAccessor = this;
    }
    ngOnInit(): void {
        const control = this.controlDir.control;
        const validators = control.validator ? [control.validator] : [];
        const asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];
        control.setValidators(validators);
        control.setAsyncValidators(asyncValidators);
        control.updateValueAndValidity();
        console.log(this.input);
        console.log(this.controlDir);
    }
    onChange(event){
        console.log(event);
	}
    onTouched(event) {

    }

    writeValue(obj: any): void {
       this.input.nativeElement.value = obj || '';
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error('Method not implemented.');
    }
 
}