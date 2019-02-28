import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  spinner = false;
  Username: '';
  Password: '';

  constructor(private router: Router, private server: ServerService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  async login() {
    if (!this.Username) {
      this.snackBar.open('Enter your username', 'OK', {
        duration: 3000
      });
      return;
    }

    if (!this.Password) {
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
      Username: this.Username,
      Password: this.Password,
    };

    try {
      const response = await this.server.postService('Login', body);
      if (response.Code === '00' && response.Data.UserType === 'Administrator') {
        localStorage.setItem('sessionId', response.Data.sessionId);
        localStorage.setItem('User', this.Username);
        this.snackBar.open(response.Message, 'OK', {
          duration: 3000
        });
        this.router.navigate(['admin/admin-dashboard']);
      } else if (response.Code !== '00') {
        this.snackBar.open(response.Message, 'OK', {
          duration: 3000
        });
      } else {
        this.snackBar.open('Something went wrong. Please try again', 'OK', {
          duration: 3000
        });
      }
    } catch (error) {}

  }

  toggleSpinner(): void {
    this.spinner = !this.spinner;
  }


}
