import { ServerService } from '../../../services/server.service';
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
    // if (!this.Username) {
    //   this.snackBar.open('Enter your username', 'OK', {
    //     duration: 3000
    //   });
    //   return;
    // }

    // if (!this.Password) {
    //   this.snackBar.open('Enter your password', 'OK', {
    //     duration: 3000
    //   });
    //   return;
    // }
    this.toggleSpinner();
    await this.authenticate();
    this.toggleSpinner();
  }

  async authenticate() {
    this.router.navigate(['admin/dashboard']);
  }

  toggleSpinner(): void {
    this.spinner = !this.spinner;
  }


}
