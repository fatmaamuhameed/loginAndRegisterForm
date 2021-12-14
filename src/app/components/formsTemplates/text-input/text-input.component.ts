import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  textRequired:boolean = true;
  maxLength : number = 9;
  minLength : number = 3;
  constructor() { }

  textForm:any = new FormGroup ({
    textInput: new FormControl(null)
  })

  sumbitForm(textInfo:any){
    console.log(textInfo);
  }
  get textInput() {
    return this.textForm.get('textInput');
  } 
  
  ngOnInit(): void {
    if(this.textRequired){
      this.textInput.setValidators([ Validators.required , Validators.maxLength(this.maxLength) , Validators.minLength(this.minLength)]);
      this.textInput.updateValueAndValidity();
    }
    else{
      this.textInput.setValidators([Validators.maxLength(this.maxLength) , Validators.minLength(this.minLength) ]);
      this.textInput.updateValueAndValidity();
    }      
  }

}
