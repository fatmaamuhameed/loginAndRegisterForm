import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { FormsModule } from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { InternationalPhoneNumberModule } from 'ng-phone-number';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmailComponent } from './components/formsTemplates/email/email.component';
import { IntegerInputsComponent } from './components/formsTemplates/integer-inputs/integer-inputs.component';
import { FloatInputComponent } from './components/formsTemplates/float-input/float-input.component';
import { PhoneComponent } from './components/formsTemplates/phone/phone.component';
import { DrobdownSearchComponent } from './components/formsTemplates/drobdown-search/drobdown-search.component';
import { TextInputComponent } from './components/formsTemplates/text-input/text-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenerateInputsComponent } from './components/generate-inputs/generate-inputs.component';



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
    IntegerInputsComponent,
    FloatInputComponent,
    PhoneComponent,
    DrobdownSearchComponent,
    TextInputComponent,
    GenerateInputsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2TelInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    InternationalPhoneNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
