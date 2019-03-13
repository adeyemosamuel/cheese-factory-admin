import { ServerService } from './../../server.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detailsmodal',
  templateUrl: './detailsmodal.component.html',
  styleUrls: ['./detailsmodal.component.scss']
})
export class DetailsmodalComponent implements OnInit {
  phoneNumber: any;
  spinner = false;

  constructor(public dialogRef: MatDialogRef<DetailsmodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private server: ServerService,
              private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }
  toggleSpinner(): void {
    this.spinner = !this.spinner;
  }


  async submit(phoneNumber) {
       if (!this.phoneNumber) {
      this.snackBar.open('Enter Phone Number', 'OK', {
        duration: 3000
      });
      return;
    }

       console.log('My Phone', this.phoneNumber);
       const response = await this.server.getService(`flashlend/GetCustomer?phoneNumber=${phoneNumber}`); // `template string
       if (response.code === '00') {
         localStorage.setItem('Number', this.phoneNumber);
         this.dialogRef.close();
         this.router.navigate(['admin/userdetails']);
       } else if (response.code !== '00') {
         localStorage.removeItem('Number');
         this.snackBar.open(response.message, 'OK', {
          duration: 3000
        });
       } else {
        localStorage.removeItem('Number');
        this.snackBar.open('Something went wrong. Please try again', 'OK', {
          duration: 3000
        });
      }

   }


  cancel() {
    this.dialogRef.close();
  }
}
