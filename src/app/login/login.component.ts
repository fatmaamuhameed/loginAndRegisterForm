import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: any;

  constructor(private AuthService:AuthService , private Router:Router , private active:ActivatedRoute) { }

  error : string = ""
  loginForm: any = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    userPassword: new FormControl(null, [Validators.required])

  });

  submitForm(loginForm: any) {
    this.returnUrl = this.active.snapshot.queryParams['returnUrl'] || '/';

    console.log(loginForm);

    if (loginForm.valid) {


      this.AuthService.login(loginForm.value)
      .subscribe((response) => {
        console.log(response);

        localStorage.setItem("userToken", response.token);
        localStorage.setItem("UserDisplay", JSON.stringify(response.user));

        this.Router.navigateByUrl(this.returnUrl)

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

