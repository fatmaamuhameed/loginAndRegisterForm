import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {path:'login' , component:LoginComponent},
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
    {path:'upload',component:UploadComponent},
    {path:'post/:id',component:PostComponent,canActivate:[AuthGuard]},
    {path:'**',component:NotfoundComponent}

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
