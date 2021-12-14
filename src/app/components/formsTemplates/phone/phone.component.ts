import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  numCountry:any
  errorr:any
  numberr:any
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  telInputObject(obj:any) {
    //console.log(obj.p);
    obj.setCountry('eg');
  }

  onCountryChange(event:any){
    console.log(event);
    this.getNumber(event);
    this.numCountry = '+' +  event.dialCode
  }

  hasError(err:any){
    console.log(err);
    this.errorr = err;
  }

  getNumber(num:any){
    console.log(num);
    this.numberr = num
  }
  
  checkNum(){
    console.log(this.numberr);
    console.log(this.errorr); 
  }
}
