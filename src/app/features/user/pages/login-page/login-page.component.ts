import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { checkEmailFormat } from '@user/user.helper';
import { UserService } from '@user/services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '@core/services/auth/auth.service';
import { Subscription } from 'rxjs';

interface LoginValues {
  email: string,
  password: string
}

interface LoginResponse {
  message: string,
  token: string
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  overallError: string = "";
  errors: LoginValues = {
    email: "",
    password: ""
  }

  private _tokenSubscription: Subscription = null;
  private _errorSubscription: Subscription = null;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this._tokenSubscription = this.userService.getTokenObservable().subscribe(
      res => {
        console.log("login page: logged in |", res)
        this.router.navigate(["/home"]);
        this.authService.setToken(res);
        this.userService.getCurrentUser();
      },
    )

    this._errorSubscription = this.userService.getErrorObservable().subscribe(
      res => {
        console.log("login page: error |", res);
        this.overallError = res;
      }
    )
  }

  ngOnDestroy(): void {
    this._tokenSubscription.unsubscribe();
    this._errorSubscription.unsubscribe();
  }

  /**
   * When user presses "Login".
   * @param formValues Form values, email and password
   * @param event Form submission event
   */
  onSubmit(formValues: LoginValues, event: Event): void {
    event.preventDefault();
    if (this.validateForm()) {
      // Send request to login
      this.userService.loginUser(formValues.email, formValues.password);
    } else {
      // Don't send a request to login
    }
  }

  /**
   * Validate the form on the client side.
   * @returns Whether the form is valid for submission.
   */
  validateForm(): boolean {
    var isValid: boolean = true;
    var { email, password }: LoginValues = this.loginForm.value;

    this.overallError = "";
    this.errors.email = "";
    this.errors.password = "";

    // Email format check
    if (!checkEmailFormat(email)) {
      this.errors.email = "This is not a valid email address!";
      isValid = false;
    }

    // Empty field check
    if (email === "") {
      this.errors.email = "Cannot leave this field empty!";
      isValid = false;
    }
    if (password === "") {
      this.errors.password = "Cannot leave this field empty!";
      isValid = false;
    }

    return isValid;
  }

}
