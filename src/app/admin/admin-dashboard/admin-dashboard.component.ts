import { ServerService } from './../../server.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  UserId: any;
  spinner = false;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private server: ServerService) { }

 async ngOnInit() {
  this.activatedRoute.params.subscribe((Username) => {
    this.UserId = Username;
    console.log(this.UserId, 'My USER IDENTITY');
    this.fetchUserDetails(this.UserId);
  });
  }

  async fetchUserDetails(id) {
    this.toggleSpinner();
    const response = await this.server.getService(`GetUser?userId=${id}`); // `template string
    console.log(response);
    this.toggleSpinner();
   }

   toggleSpinner(): void {
    this.spinner = !this.spinner;
  }

}
