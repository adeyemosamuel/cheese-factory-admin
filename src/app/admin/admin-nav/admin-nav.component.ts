import { DetailsmodalComponent } from './../../component/detailsmodal/detailsmodal.component';
import { PhonemodalComponent } from './../../component/phonemodal/phonemodal.component';
import { ServerService } from './../../server.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {
  displayMode = 'flat';
  hide = false;
  UserId: number;
  SideMenu: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private server: ServerService,
              public dialog: MatDialog
    ) {}

    async ngOnInit() {
      this.UserId = JSON.parse(localStorage.getItem('User'));
      await this.fetchUserDetails(this.UserId);
      }

      async fetchUserDetails(id) {
        const response = await this.server.getService(`user/adminmenu?roleId=${id}`); // `template string
        this.SideMenu = response.Data;
       }

  goTo(item) {
   if (item.Id === 1) {
     this.router.navigate(['admin/dashboard']);
     return;
   }

   if (item.Id === 2) {
    this.router.navigate(['admin/users']);
    return;
  }

   if (item.Id === 3) {
    this.router.navigate(['admin/applications']);
    return;
  }

   if (item.Id === 4) {
    this.router.navigate(['admin/functions']);
    return;
  }

  }

  expanding() {
    this.hide = !this.hide;
  }


  logout() {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.clear();
      this.router.navigate(['login']);
    } else {
    }
  }

  fetchLoanHistory(): void  {
    localStorage.removeItem('Phone Number');
    const dialogRef = this.dialog.open(PhonemodalComponent, {
      minWidth: '20vw',
      height: '30%',
  });
  }

  getUserDetails(): void  {
    localStorage.removeItem('Number');
    const dialogRef = this.dialog.open(DetailsmodalComponent, {
    minWidth: '20vw',
    height: '30%',
  });
  }

}
