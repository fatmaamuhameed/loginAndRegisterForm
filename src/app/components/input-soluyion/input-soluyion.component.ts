import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-input-soluyion',
  templateUrl: './input-soluyion.component.html',
  styleUrls: ['./input-soluyion.component.css']
})
export class InputSoluyionComponent implements OnInit {
  todo = [{
    name:'Get to work',
    id:1
  },{ name:'Pick up groceries',
  id:2
  }, { name:'Go home',
  id:3
},  { name:'Fall asleep',
id:4
}];
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

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container);
    let  drop = document.getElementById('drops')
    let createInput = document.createElement('input');
    createInput.setAttribute("type",`text`);
    createInput.setAttribute("placeholder",`name`)
    createInput.setAttribute("id",`name`);
    createInput.setAttribute("name",`name`)
    //@ts-ignore
    drop.appendChild(createInput)
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
