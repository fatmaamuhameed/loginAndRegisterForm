import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails:any
  constructor() { }

  ngOnInit(): void {

    let user= localStorage.getItem('UserDisplay')
    // this.userDetails.push(user)
    let obj = JSON.parse(`${user}`)

    this.userDetails = obj
    console.log(obj);


  }


}
