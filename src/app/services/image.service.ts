import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class ImageService {
  url: string = "https://api.imgur.com/3/image";
  private clientId: string = "YOUR_CLIENT_ID";
  private accessToken: string = "18a51fef5703d9e229d40c8dd0e837e1f6713629";
  imageLink: any;
  completeUpload : boolean = false;
  constructor(private http: HttpClient) {}

  //this function take image and send it to imgur
  //using http post send headers and form data (image)
  upload(imageFile: File) {
    console.log(imageFile);

    let formData = new FormData();
    formData.append("image", imageFile, imageFile.name);
    console.log(formData.get("image"));
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`
    });
    let options = { headers: headers };

    return (this.http.post(this.url, formData, options))
      
  }
}
