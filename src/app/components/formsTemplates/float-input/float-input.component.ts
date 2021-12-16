import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-float-input',
  templateUrl: './float-input.component.html',
  styleUrls: ['./float-input.component.css']
})
export class FloatInputComponent implements OnInit {

  floatRequired : boolean = true;
  maxLength : number = 9;
  minLength : number = 3;

  constructor() { }
  FloatForm:any = new FormGroup ({
    floatInput: new FormControl(null)
  })

  sumbitForm(floatInfo:any){
    console.log(floatInfo);
  }
  get floatInput() {
    return this.FloatForm.get('floatInput');
  } 
  
  // ^[0-9]+\.[0-9]{1,4}$

keyPress(event: any) {
  var txt = String.fromCharCode(event.keyCode);
  console.log(txt);
  if(/\++|-/.test(txt)){
    return false;
  }
  else{
    return true;
  }
}
  ngOnInit(): void {
    if(this.floatRequired){
      this.floatInput.setValidators([ Validators.required, Validators.pattern(`^[0-9]+\.[0-9]{1,4}$`)]);
      this.floatInput.updateValueAndValidity();
    }
    else{
      this.floatInput.setValidators([Validators.pattern(`^[0-9]{${this.minLength},${this.maxLength}}$`)]);
      this.floatInput.updateValueAndValidity();
    }      
  }

}
