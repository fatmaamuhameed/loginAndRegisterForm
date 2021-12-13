import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any = new FormGroup({
    userName: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    confirmPassword: new FormControl(null,[Validators.required,Validators.maxLength(15)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    userPassword: new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"),Validators.maxLength(15)]),
  })
  constructor(private _Auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    console.log("data" , data);

    this._Auth.signUp(data.value).subscribe(res => {
      //this.registerForm = res
      console.log(res);
      console.log(data.value);

    })

  }

}
