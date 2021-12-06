import { Router, Routes } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthService , private Router:Router) { }

  error : string = ""
  loginForm: any = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    userPassword: new FormControl(null, [Validators.required])

  });

  submitForm(loginForm: any) {

    console.log(loginForm);
    
    if (loginForm.valid) {


      this.AuthService.login(loginForm.value)
      .subscribe((response) => {
        console.log(response);
        this.Router.navigate(['/profile'])
      }, error => {
        console.log(error.error.message);
        this.error = error.error.message;
      }
      )

    }
  }

  ngOnInit(): void {
  }

}

