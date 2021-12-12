import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
declare var gapi: any; //this is the key

@Injectable({
  providedIn: 'root',
})
export class GoogleSigninService {
  
  //@ts-ignore
  private auth2: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);
  constructor() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id:
          '874737089122-3r3oed8m3np6m0i2hgi2qrr76auoibsp.apps.googleusercontent.com'
      });
    });
  }

  public signIn() {
    this.auth2
      .signIn({
        scope: 'https://www.googleapis.com/auth/gmail.readonly'
      })
      .then(user => {
        this.subject.next(user);
        console.log(user);

      })
      .catch(() => {
        //@ts-ignore
        this.subject.next(null)
      });
  }

  public signOut() {
    this.auth2.signOut().then(() => {
      //@ts-ignore
      this.subject.next(null)

    });
  }

  public obsarvable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }
}
