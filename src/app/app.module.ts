import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {Ng2TelInputModule} from 'ng2-tel-input';
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
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSoluyionComponent } from './components/input-soluyion/input-soluyion.component';
import { FloatInputComponent } from './components/formsTemplates/float-input/float-input.component';
import { PhoneComponent } from './components/formsTemplates/phone/phone.component';
import { DrobdownSearchComponent } from './components/formsTemplates/drobdown-search/drobdown-search.component';
import { TextInputComponent } from './components/formsTemplates/text-input/text-input.component';
import { GenerateInputsComponent } from './components/generate-inputs/generate-inputs.component';
import { DragInputsComponent } from './components/drag-inputs/drag-inputs.component';
import { WorkflowComponent } from './components/workflow/workflow.component';



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
    DragDropComponent,
    InputSoluyionComponent,
    FloatInputComponent,
    PhoneComponent,
    DrobdownSearchComponent,
    TextInputComponent,
    GenerateInputsComponent,
    DragInputsComponent,
    WorkflowComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    DragDropModule,
    Ng2TelInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    InternationalPhoneNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
