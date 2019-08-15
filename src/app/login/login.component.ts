import { ServerService } from '../../../services/server.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ApiEndpoints } from 'services/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  spinner = false;
  userName: any;
  password: any;
  email: any;

  constructor(private router: Router, private server: ServerService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  async login() {
    if (!this.userName) {
      this.snackBar.open('Enter your username', 'OK', {
        duration: 3000
      });
      return;
    }

    if (!this.email) {
      this.snackBar.open('Enter your password', 'OK', {
        duration: 3000
      });
      return;
    }

    if (!this.password) {
      this.snackBar.open('Enter your password', 'OK', {
        duration: 3000
      });
      return;
    }
    this.toggleSpinner();
    await this.authenticate();
    this.toggleSpinner();
  }

  async authenticate() {
    const body = {
      userName: this.userName,
      email: this.email,
      password: this.password
    };
    console.log('My body', body);
    try {
      const response = await this.server.postService(body, ApiEndpoints.USER_LOGIN);
      console.log('Login Response', response);
    } catch (e) {

    }
    this.router.navigate(['admin/dashboard']);
  }

  toggleSpinner(): void {
    this.spinner = !this.spinner;
  }


}
