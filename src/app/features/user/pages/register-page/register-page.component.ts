import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { UserService } from '@user/services/user.service';
import { checkDisplayNameFormat, checkEmailFormat, checkPasswordFormat } from '@user/user.helper';
import { Subscription } from 'rxjs';

interface RegisterValues {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  registerForm = new FormGroup({
    displayName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  overallError: string = "";
  errors: RegisterValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  private _tokenSubscription: Subscription = null;
  private _errorSubscription: Subscription = null;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this._tokenSubscription = this.userService.getTokenObservable().subscribe(
      res => {
        console.log("register page: logged in |", res)
        this.router.navigate(["/home"]);
        this.authService.setToken(res);
        this.userService.getCurrentUser();
      },
    )

    this._errorSubscription = this.userService.getErrorObservable().subscribe(
      res => {
        console.log("register page: error |", res);
        this.overallError = res;
      }
    )
  }

  ngOnDestroy(): void {
    this._tokenSubscription.unsubscribe();
    this._errorSubscription.unsubscribe();
  }

  /**
   * When user presses "Register".
   * @param formValues Form values, display name, email, password and confirmPassword
   * @param event Form submission event
   */
  onSubmit(formValues: RegisterValues, event: Event): void {
    event.preventDefault();
    if (this.validateForm()) {
      // Send request to login
      this.userService.registerUser(formValues.displayName, formValues.email, formValues.password);
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
    var { displayName, email, password, confirmPassword }: RegisterValues = this.registerForm.value;

    this.errors.displayName = "";
    this.errors.email = "";
    this.errors.password = "";
    this.errors.confirmPassword = "";

    // Display name format check
    if(!checkDisplayNameFormat(displayName)){
      this.errors.displayName = "Display names must only contain alphanumeric characters and be between 4 and 20 characters long. No spaces, underscores, hyphens, etc.";
      isValid = false;
    }

    // Email format check
    if (!checkEmailFormat(email)) {
      this.errors.email = "This is not a valid email address!";
      isValid = false;
    }

    // Password format check
    if (!checkPasswordFormat(password)) {
      this.errors.password = "Password must have at least 8 characters, have at least 1 letter and 1 number.";
      isValid = false;
    }

    // Confirm password check
    if(password !== confirmPassword){
      this.overallError = "Passwords do not match!";
      isValid = false;
    }

    // Empty field check
    if (displayName === "") {
      this.errors.displayName = "Cannot leave this field empty!";
      isValid = false;
    }
    
    if (email === "") {
      this.errors.email = "Cannot leave this field empty!";
      isValid = false;
    }

    if (password === "") {
      this.errors.password = "Cannot leave this field empty!";
      isValid = false;
    }

    if (confirmPassword === "") {
      this.errors.confirmPassword = "Cannot leave this field empty!";
      isValid = false;
    }

    return isValid;
  }


}
