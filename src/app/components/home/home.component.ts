import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Post[]=[
    {
      id:1,
      name:"ahmed adel",
      phone:"010111111"
    },
    {
      id:2,
      name:"ahmed adel",
      phone:"0102222222"
    },
    {
      id:3,
      name:"ahmed adel",
      phone:"0103333333"
    },
    {
      id:4,
      name:"ahmed adel",
      phone:"01044444444"
    },
    {
      id:5,
      name:"ahmed adel",
      phone:"0105555555"
    },
    {
      id:4,
      name:"ahmed adel",
      phone:"01066666666"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
