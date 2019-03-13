import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  userContactNumber: any;
  UserDetails = {};
  firstName: any;
  lastName: any;
  emailAddress: any;
  phoneNumber: any;

  constructor(private server: ServerService, private router: Router) { }

  async ngOnInit() {
    this.userContactNumber = JSON.parse(localStorage.getItem('Number'));
    await this.fetchUserDetails(this.userContactNumber);
  }

  async fetchUserDetails(phoneNumber) {
    const response = await this.server.getService(`flashlend/GetCustomer?phoneNumber=${phoneNumber}`); // `template string
    this.UserDetails = response.data;
    this.firstName = response.data.firstName;
    this.lastName = response.data.lastName;
    this.emailAddress = response.data.emailAddress;
    this.phoneNumber = response.data.phoneNumber;
    console.log('DETAILS', this.UserDetails);
  }

}
