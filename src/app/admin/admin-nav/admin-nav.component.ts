import { ServerService } from './../../server.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {
  displayMode = 'flat';
  hide = false;
  UserId: number;
  SideMenu = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private server: ServerService,
              public dialog: MatDialog
    ) {}

    async ngOnInit() {
      this.UserId = JSON.parse(localStorage.getItem('User'));
      console.log('My ID', this.UserId);
      await this.fetchUserDetails(this.UserId);
      }

      async fetchUserDetails(id) {
        const response = await this.server.getService(`GetUserAppFunctions/${id}`); // `template string
        console.log('My Response', response);
        this.SideMenu = response.Data;
        console.log('Side Menu Data', this.SideMenu);
       }

  dashboard() {
    this.router.navigate(['admin/admin-dashboard']);
  }

  expanding() {
    this.hide = !this.hide;
  }

  applications() {
  this.router.navigate(['admin/applications']);
  }

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.clear();
      this.router.navigate(['login']);
    } else {
    }
  }

}
