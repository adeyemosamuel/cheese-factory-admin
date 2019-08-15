import { ServerService } from '../../../../services/server.service';
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
  SideMenu: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private server: ServerService,
              public dialog: MatDialog
    ) {}

    async ngOnInit() {
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

}
