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

  constructor(private router: Router, private server: ServerService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
      this.router.navigate(['admin/dashboard']);
      // this.snackBar.open('Enter email address', 'OK', {
      //   duration: 3000
      // });
  }

  toggleSpinner(): void {
    this.spinner = !this.spinner;
  }


}
