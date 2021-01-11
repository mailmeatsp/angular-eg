import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(formData): Observable<any> {
    return this.http.post('https://reqres.in/api/login', formData)
      .pipe(map((response: any) => {
        const user = response;
        if (user.results.succeeded) {
          localStorage.setItem('token', user.token);
        }
      }));
  }

}
