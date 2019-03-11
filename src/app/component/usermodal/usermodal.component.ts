import { ServerService } from './../../server.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-usermodal',
  templateUrl: './usermodal.component.html',
  styleUrls: ['./usermodal.component.scss']
})
export class UsermodalComponent implements OnInit {
  roles = [];
  spinner = false;
  Username: '';
  Password: '';
  Rolename: any;

  constructor(public dialogRef: MatDialogRef<UsermodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private server: ServerService,
              private snackBar: MatSnackBar, private router: Router) { }

 async ngOnInit() {
   await this.getRoles();
  }

  async getRoles() {
    const response = await this.server.getService('user/GetRoles');
    console.log('Roles Response', response);
    this.roles = response;
    console.log('Roles', this.roles);
  }


toggleSpinner(): void {
  this.spinner = !this.spinner;
}


cancel() {
  this.dialogRef.close();
}

async submit() {
  if (!this.Username) {
    this.snackBar.open('Enter Username', 'OK', {
      duration: 3000
    });
    return;
  }

  if (!this.Password) {
    this.snackBar.open('Enter Password', 'OK', {
      duration: 3000
    });
    return;
  }

  if (!this.Rolename) {
    this.snackBar.open('Select a role', 'OK', {
      duration: 3000
    });
    return;
  }
  this.toggleSpinner();
  const body = {
    Username: this.Username,
    Password: this.Password,
    RoleName: this.Rolename
  };
  console.log(body);
  try {
    const response = await this.server.postService('user/CreateUser', body);
    console.log(response);
    if (response.Code === '00') {
      console.log(response.Message);
      this.snackBar.open(response.Message, 'OK', {
        duration: 3000
      });
      this.dialogRef.close();
    } else if (response.Code === '01') {
      console.log(response.Message);
      this.snackBar.open(response.Message, 'OK', {
        duration: 3000
      });
      this.dialogRef.close();
    } else {
      this.snackBar.open('Please try again', 'OK', {
        duration: 3000
      });
      this.dialogRef.close();
    }
  } catch (error) {}
  this.toggleSpinner();

}

}
