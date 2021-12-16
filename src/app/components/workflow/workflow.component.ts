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
  drop(event: any) {
    console.log(event);
    this.htmlYouWantToAdd = "<input/>";
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
