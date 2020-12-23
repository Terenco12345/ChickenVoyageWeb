import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { UserProfile, UserService } from '@user/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  // Public fields
  profile: UserProfile = null;
  loading: boolean;

  // Private fields
  private _subscription: Subscription = null;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loading = true;
    this._subscription = this.userService.getUserObservable().subscribe(
      res => {
        console.log("home page updated profile", res);
        this.profile = res;
        this.loading = false;
      },
      _ => {
        this.authService.setToken("");
        this.loading = false;
      }
    );
    this.userService.getCurrentUser();
  }

  ngOnDestroy(): void{
    this._subscription?.unsubscribe();
  }
}
