import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5011/api/Auth/signup';

  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
