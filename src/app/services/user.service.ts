import { Injectable } from '@angular/core';

import { AuthRequestService } from './auth-request.service';

import { AuthToken } from '../util/auth-token'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedInVal: boolean = false;
  private isSignedUpVal: boolean = false;
  private loginErrorMessage: string = '';
  private signUpErrorMessage: string = '';
  private authToken: AuthToken = {access_token: ''};

  constructor(private authRequestService: AuthRequestService) { }

  getAuthToken() {
    return this.authToken;
  }

  isLoggedIn() {
    return this.isLoggedInVal;
  }

  isSignedUp() {
    return this.isSignedUpVal;
  }

  getLoginErrorMessage() {
    return this.loginErrorMessage;
  }

  getSignUpErrorMessage() {
    return this.signUpErrorMessage;
  }

  signUp(username: string, password: string) {
    this.authRequestService.signUpRequest({'username': username, 'password': password, 'error': ''}).subscribe({
      next: value => {
        if (value != undefined) {
          if (value.error != undefined || value.error == '') {
            console.log("Succesfully signed up");
            this.isSignedUpVal = true;
            this.signUpErrorMessage = '';
          } else {
            console.log("Can't sign up");
            this.isSignedUpVal = false;
            this.signUpErrorMessage = value.error;
          }
          
        } else {
          console.error("Problem with response after sign up request")
        }
      }
    })
  }

  signIn(username: string, password: string) {
    this.authRequestService.signInRequest(username, password).subscribe({
      next: value => {
        console.log(value);
        this.authToken.access_token = value.access_token;
        if (value != undefined && this.authToken != undefined) {
          this.isLoggedInVal = true;
          this.loginErrorMessage = '';
        } else {
          this.authToken = null;
          this.isLoggedInVal = false;
          this.loginErrorMessage = 'Can\'t sign in';
          console.error("invalid auth token");
        }
      }
    })
  }

  logOut() {
    this.authToken.access_token = '';
    this.isLoggedInVal = false;
    this.loginErrorMessage = '';
  }

}
