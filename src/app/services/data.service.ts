import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {
  public progressSource = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) { }

  Uploadfile(files: any): Observable<HttpEvent<any>> {
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post("http://localhost:56337/api/MiniLinkedin/upload", formData, { reportProgress: true, observe: 'events' });
  }


  get(url: string, requestOptions: any): Observable<T> {
    return this.http.get<T>(url, {
      headers: requestOptions
    });
  }

  async postData(url: string, data: any) {
    return this.http.post(url, data).
      pipe(
        map((data: any) => {
          return data;
        }),
        catchError(error => {
          return throwError('Error');
        })
      )
  }





}
