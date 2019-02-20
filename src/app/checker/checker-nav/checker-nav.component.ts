import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checker-nav',
  templateUrl: './checker-nav.component.html',
  styleUrls: ['./checker-nav.component.scss']
})
export class CheckerNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  dashboard() {
    this.router.navigate(['authorizer/dashboard']);
  }

  message() {
    this.router.navigate(['authorizer/message']);
  }

}
