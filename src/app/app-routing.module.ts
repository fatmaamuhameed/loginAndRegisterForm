import { IntegerInputsComponent } from './components/formsTemplates/integer-inputs/integer-inputs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UploadComponent } from './components/upload/upload.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';
import { EmailComponent } from './components/formsTemplates/email/email.component';

const routes: Routes = [
    {path:'login' , component:LoginComponent},
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
    {path:'upload',component:UploadComponent},
    {path:'post/:id',component:PostComponent,canActivate:[AuthGuard]},
    {path: 'email' , component:EmailComponent},
    {path: 'integer' , component:IntegerInputsComponent},
    {path:'**',component:NotfoundComponent}

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
