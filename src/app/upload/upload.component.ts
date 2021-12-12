import { variable } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from '../services/google-signin.service';
import { ImageService } from '../services/image.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  //@ts-ignore
   // this variable = Google user profile to display data
  public user: gapi.auth2.GoogleUser
  constructor(private imageService: ImageService , private google:GoogleSigninService ,private ref:ChangeDetectorRef){}
  ngOnInit(): void {
    // this google api for display user data
    this.google.obsarvable().subscribe(user => {
      this.user = user
      console.log(user);

      this.ref.detectChanges()
    })
  }

  // this function upload image and send to api services
  // processFile(imageInput: any) {
  //   const file:File = imageInput.files[0];

  //     this.imageService.uploadImage(file).subscribe(
  //       (res) => {
  //           console.log(res);
  //       },
  //       (err) => {
  //           console.log(err);

  //       })


  // }

  // this function for signIn With Google
  signIn(){
    this.google.signIn()
  }

  // this function for signOut With Google
  signOut(){
    this.google.signOut()
  }

}
