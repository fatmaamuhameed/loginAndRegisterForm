import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  todo = ['hello'];
  done = [];
  htmlYouWantToAdd = "";
  constructor() { 

  }
  //drop function 
  drop(event: any) {
    console.log(event.container);

    let  drop = document.getElementById('htmlYouWantToAdd')
    
    let createInput = document.createElement('input');
    createInput.setAttribute("type",`text`);
    createInput.setAttribute("placeholder",`name`)
    createInput.setAttribute("id",`name`);
    createInput.setAttribute("name",`name`)
    //@ts-ignore
    drop.appendChild( createInput)

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      
      }
  }
  ngOnInit(): void {
  }

}
