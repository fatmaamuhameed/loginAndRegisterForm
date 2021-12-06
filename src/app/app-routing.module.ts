import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'' , component:AppComponent , children:[
    {path:'login' , component:LoginComponent},
    {path:'',component:RegisterComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent}

  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
