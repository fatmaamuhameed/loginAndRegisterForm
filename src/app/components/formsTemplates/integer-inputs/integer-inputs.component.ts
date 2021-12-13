import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-integer-inputs',
  templateUrl: './integer-inputs.component.html',
  styleUrls: ['./integer-inputs.component.css']
})
export class IntegerInputsComponent implements OnInit {

  integerRequired : boolean = true;
  maxLength : number = 9;
  minLength : number = 3;

  constructor() { }
  IntegerForm:any = new FormGroup ({
    integerInput: new FormControl(null)
  })

  sumbitForm(IntegerInfo:any){
    console.log(IntegerInfo);
  }
  get integerInput() {
    return this.IntegerForm.get('integerInput');
  } 
  



  ngOnInit(): void {
    if(this.integerRequired){
      this.integerInput.setValidators([ Validators.required, Validators.pattern(`^[0-9]{${this.minLength},${this.maxLength}}$`)]);
      this.integerInput.updateValueAndValidity();
    }
    else{
      this.integerInput.setValidators([Validators.pattern(`^[0-9]{${this.minLength},${this.maxLength}}$`)]);
      this.integerInput.updateValueAndValidity();
    }      
  }

}
