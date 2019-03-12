import { ServerService } from './../../server.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-phonemodal',
  templateUrl: './phonemodal.component.html',
  styleUrls: ['./phonemodal.component.scss']
})
export class PhonemodalComponent implements OnInit {
  phoneNumber: any;
  spinner = false;

  constructor(public dialogRef: MatDialogRef<PhonemodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private server: ServerService,
              private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  toggleSpinner(): void {
    this.spinner = !this.spinner;
  }


  async submit(phoneNumber) {
       if (!this.phoneNumber) {
      this.snackBar.open('Enter Username', 'OK', {
        duration: 3000
      });
      return;
    }
       const response = await this.server.getService(`flashlend/CustomerLoanHistory?phoneNumber=${phoneNumber}`); // `template string
       if (response.code === '00') {
         localStorage.setItem('Phone Number', this.phoneNumber);
         this.dialogRef.close();
         this.router.navigate(['admin/loanhistory']);
       } else if (response.code !== '00') {
         localStorage.removeItem('Phone Number');
         this.snackBar.open(response.message, 'OK', {
          duration: 3000
        });
       } else {
        localStorage.removeItem('Phone Number');
        this.snackBar.open('Something went wrong. Please try again', 'OK', {
          duration: 3000
        });
      }

   }


  cancel() {
    this.dialogRef.close();
  }

}
