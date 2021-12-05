import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm: any = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.maxLength(15) , Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-z]{3,10}$')]),

  });

  ngOnInit(): void {
  }

}
