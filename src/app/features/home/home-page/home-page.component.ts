import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { UserProfile, UserService } from '@user/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isLoggedIn = false;
  profile: UserProfile = {
    displayName: "",
    email: "",
    creationDate: ""
  }

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(
      res => {
        var profile: UserProfile = res.body;
        this.profile.displayName = profile.displayName;
        this.isLoggedIn = true;
      },
      _ => {
        this.authService.setToken("");
        this.isLoggedIn = false;
      }
    )
  }
}
