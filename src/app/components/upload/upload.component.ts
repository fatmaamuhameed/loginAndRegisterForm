import { variable } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from '../../services/google-signin.service';
import { ImageService } from '../../services/image.service';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  pdfSrc : any

  constructor(private imageService: ImageService , private google:GoogleSigninService ,private ref:ChangeDetectorRef){

  }
  ngOnInit(): void {
  
  }

  onFileSelected() {
    let $img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
        let reader = new FileReader();
    
        reader.onload = (e: any) => {
            this.pdfSrc = e.target.result;
        };
    
        reader.readAsArrayBuffer($img.files[0]);
    }
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

  

}
