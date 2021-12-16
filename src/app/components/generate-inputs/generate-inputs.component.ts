import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-inputs',
  templateUrl: './generate-inputs.component.html',
  styleUrls: ['./generate-inputs.component.css']
})
export class GenerateInputsComponent implements OnInit {

  constructor() { 
  }

  labelName : String = "";
  inputType : String = "";
  displayResult : boolean = false;
  labelNameRes : String = "";
  inputTypeRes : String = "" ;
  freeText : boolean = false;
  radioArray : Array<any> = [];
  radioArrayRes : Array<any> = [];

  createInput(labelname:String){

    if(this.inputType == ""){
      var inputValue = (<HTMLInputElement>document.getElementById("firstValue")).value;
      console.log(inputValue);
      this.inputTypeRes = inputValue;
      this.labelName = labelname;
      this.labelNameRes = this.labelName;
      this.displayResult = true; 
    }
    else{
      if(this.inputType == "radio"){
        this.displayResult = false;
        this.freeText = true;
        this.labelName = labelname;
        this.labelNameRes = this.labelName;
      }
      else{
        this.inputTypeRes = this.inputType;
        this.labelName = labelname;
        this.labelNameRes = this.labelName;
        this.displayResult = true; 
      }

    }
  }

  selectType(changes:any){
    console.log(changes.target.value);
    this.inputType = changes.target.value;
  }

  generate(value:any){
  console.log("value" , value);
  this.radioArray = []
   let res = value.split("\n");
    this.radioArray.push(res);
    console.log(this.radioArray[0]);
    this.radioArrayRes = this.radioArray[0];

    this.radioArrayRes = this.radioArrayRes.filter(function(str) {
      return /\S/.test(str);
  });
  console.log(this.radioArrayRes);
  
  }
  ngOnInit(): void {
    
  }

}
