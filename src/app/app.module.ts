import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { environment } from '../environments/environment';

import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmailComponent } from './components/formsTemplates/email/email.component';
import { IntegerInputsComponent } from './components/formsTemplates/integer-inputs/integer-inputs.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UploadComponent,
    UploadImagesComponent,
    NavbarComponent,
    HomeComponent,
    PostComponent,
    NotfoundComponent,
    EmailComponent,
    IntegerInputsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [

    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule, // firestore
    // // // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
