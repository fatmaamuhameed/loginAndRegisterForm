import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-soluyion',
  templateUrl: './input-soluyion.component.html',
  styleUrls: ['./input-soluyion.component.css']
})
export class InputSoluyionComponent implements OnInit {
  inputMaker:any = new FormGroup({
    type: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    label: new FormControl(null,[Validators.required]),
  })
  constructor() { }
  ifTrue = false

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data.type);

    localStorage.setItem(`${data.name}`,JSON.stringify(data))
    const nameStorage = localStorage.getItem(`${data.name}`)
    JSON.parse(`${nameStorage}`)
    console.log(JSON.parse(`${nameStorage}`));
    
    let Input = document.getElementById('inputAdd')

    let createInput = document.createElement('input');
    createInput.setAttribute("type",`${data.type}`);
    createInput.setAttribute("placeholder",`${data.label}`)
    createInput.setAttribute("id",`${data.label}`);
    createInput.setAttribute("name",`${data.label}`)
    //@ts-ignore
    Input.appendChild(createInput)
  }
}
