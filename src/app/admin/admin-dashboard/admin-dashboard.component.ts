import { ServerService } from './../../server.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  UserId: any;
  spinner = false;
  UserDetails: any = [];

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private server: ServerService) { }

 async ngOnInit() {
  this.activatedRoute.params.subscribe((Username) => {
    this.UserId = Username.id;
    this.fetchUserDetails(this.UserId);
  });
  }

  async fetchUserDetails(id) {
    this.toggleSpinner();
    const response = await this.server.getService(`GetUserProfile/${id}`); // `template string
    this.toggleSpinner();
   }

   toggleSpinner(): void {
    this.spinner = !this.spinner;
  }

}
