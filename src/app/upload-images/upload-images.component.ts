import { ImageService } from './../services/image.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  imageFile!: File;
  uploadedMessage : String = "" ;
  errorMessage : String = "" ; 
  uplaodMess : boolean = false ;
  errorMess : boolean = false ;
  urlImg:String = "" ;
  //245df3decf0de2ecb1ee317a8483512dce881f0e

  constructor(private ImageService:ImageService) { }


  //this function get file upload when user change or choose image
  imageChange($event:any){
    this.imageFile = $event.target.files[0];   
  }

  //this function called when user click on upload image button
  //go to imageservice and call upload function

  uploadImage(){
    
    this.ImageService.upload(this.imageFile);
  }

  ngOnInit(): void {
  }

}