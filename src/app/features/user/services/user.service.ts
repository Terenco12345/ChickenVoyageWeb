import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

export interface UserProfile {
  displayName: string,
  email: string,
  creationDate: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Create an observable for registering a user
   * @param displayName 
   * @param email 
   * @param password 
   */
  registerUser(displayName: string, email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post(
      `${environment.apiUrl}/user/register`,
      {
        DisplayName: displayName,
        Email: email,
        Password: password
      },
      {
        observe: 'response'
      });
  }

  /**
   * Create an observable for logging in with user
   * @param email 
   * @param password 
   */
  loginUser(email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post(
      `${environment.apiUrl}/user/login`,
      {
        Email: email,
        Password: password
      },
      {
        observe: 'response'
      });
  }

  /**
   * Create an observable for obtaining user details - this requires a token to be present in local storage
   */
  getCurrentUser(): Observable<HttpResponse<UserProfile | any>> {
    return this.http.get(
      `${environment.apiUrl}/user`,
      {
        observe: 'response'
      });
  }
}
