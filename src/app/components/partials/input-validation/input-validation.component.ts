import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
const VALIDATOR_MESSAGE:any={
  required:'should not be empty',
  email:'Email is not valid',
  minlength: 'Field is too short',
  notMatch: 'Password and Confirm does not match'
}
@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit,OnChanges {
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean = true;
  errroMessages:string[]=[];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(( )=>{
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(()=>{
      this.checkValidation();
    })
  }
  checkValidation(){
    const errors=this.control.errors;
    if(!errors){
      this.errroMessages=[];
      return;
    }
    const errorKeys=Object.keys(errors);
    this.errroMessages=errorKeys.map(key=>VALIDATOR_MESSAGE[key]);
  }

}
