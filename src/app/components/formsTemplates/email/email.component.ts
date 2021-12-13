import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  emailRequired:boolean = true;
  constructor() { }

  emailForm:any = new FormGroup ({
    email: new FormControl(null)
  })

  sumbitForm(emailInfo:any){
    console.log(emailInfo);
  }
  get email() {
    return this.emailForm.get('email');
  } 
  
  ngOnInit(): void {
    if(this.emailRequired){
      this.email.setValidators([ Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]);
      this.email.updateValueAndValidity();
    }
    else{
      this.email.setValidators([ Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]);
      this.email.updateValueAndValidity();
    }      
  }

}
