import { ImageService } from './../services/image.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit{
  imageFile!: File;
  loading : boolean = false ;
  link : boolean = false ;
  urlImg:String = "" ;
  //245df3decf0de2ecb1ee317a8483512dce881f0e

  constructor(private ImageService:ImageService) { }

  //this function get file upload when user change or choose image
  imageChange($event:any){
    this.imageFile = $event.target.files[0];   
  }

  
  //this function called when user click on upload image button
  //go to imageservice and call upload function
  //after uploading display link and image

  uploadImage(){
    this.loading = true
    this.ImageService.upload(this.imageFile).subscribe((res:any) => {
      this.loading = false;
      this.urlImg = res.data.link;
      this.link = true;
    });
    
  }

  ngOnInit(): void {  
    
  }


}