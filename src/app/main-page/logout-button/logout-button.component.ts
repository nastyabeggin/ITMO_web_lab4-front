import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(private userService: UserService, private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logOut();
    this.navigationService.goToLogin();
  }
}
