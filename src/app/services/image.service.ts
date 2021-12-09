import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  baseApiUrl = "https://file.io"
  constructor(private http: HttpClient) {}


  public uploadImage(image:File): Observable<any> {
    const formData = new FormData();
    const endpoint = 'http://127.0.0.1:8887'

    formData.append('image', image , image.name);

    return this.http.post(`${endpoint}`, formData)

  }

}
