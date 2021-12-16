import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
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

done = [{
  name:'Get up',
  id:6
},{ name:'Brush teeth',
id:2
}, { name:'Take a shower',
id:3
},  { name:'Check e-mail',
id:4
},
{
  name:'Get down',
  id:1
},
{
  name:'Walk dog',
id:5
}]
;
test = [{
  name:'Get down',
  id:1
},{ name:'Brush ',
id:2
}, { name:'Take ',
id:3
},  { name:'Check ',
id:4
},
{
  name:'Walk ',
id:5
}]

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container);
    
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
