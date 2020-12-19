import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface UserProfile {
  isLoggedIn: boolean,
  displayName: string,
  email: string,
  creationDate: string
}

/**
 * The getUserObservable method will contain user state
 * The getErrorObservable method will contain error messages
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: Subject<UserProfile> = new Subject();
  private _token: Subject<string> = new Subject();
  private _error: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  /**
   * Get the observable which contains user state.
   */
  getUserObservable(): Observable<UserProfile> {
    return this._user.asObservable();
  }

  /**
   * Get the observable which contains error state.
   */
  getTokenObservable(): Observable<string> {
    return this._token.asObservable();
  }

  /**
   * Get the observable which contains error state.
   */
  getErrorObservable(): Observable<string> {
    return this._error.asObservable();
  }

  /**
   * Registering a user
   * @param displayName 
   * @param email 
   * @param password 
   */
  registerUser(displayName: string, email: string, password: string): void {
    this.http.post(
      `${environment.apiUrl}/user/register`,
      {
        DisplayName: displayName,
        Email: email,
        Password: password
      },
      {
        observe: 'response'
      }).subscribe(
        res => {
          console.log("registerUser: response |", res);
          this.loginUser(email, password);
        },
        err => {
          console.log("registerUser: error |", err);
          this._error.next(err.error["message"]);
        }
      );
  }

  /**
   * Logging in with user
   * @param email 
   * @param password 
   */
  loginUser(email: string, password: string): void {
    this.http.post(
      `${environment.apiUrl}/user/login`,
      {
        Email: email,
        Password: password
      },
      {
        observe: 'response'
      }).subscribe(
        res => {
          console.log("loginUser: response |", res);
          this._token.next(res.body["token"]);
          this._error.next("");
        },
        err => {
          console.log("loginUser: error |", err);
          this._error.next(err.error["message"]);
        }
      );
  }

  logoutUser(): void {
    this._user.next(null);
  }

  /**
   * Obtaining user details - this requires a token to be present in local storage
   */
  getCurrentUser(): void {
    this.http.get(
      `${environment.apiUrl}/user`,
      {
        observe: 'response'
      }).subscribe(
        res => {
          console.log("getCurrentUser: response |", res)
          this._user.next({
            isLoggedIn: true,
            displayName: res.body["displayName"],
            email: res.body["email"],
            creationDate: res.body["creationDate"]
          });
          this._error.next("");
        },
        err => {
          console.log("getCurrentUser: error |", err);
          this._user.next(null);
          this._error.next("");
        }
      );
  }
}
