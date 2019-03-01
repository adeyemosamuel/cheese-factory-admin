import { ServerService } from './../../server.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {


  constructor( private activatedRoute: ActivatedRoute, private router: Router, private server: ServerService) { }

 async ngOnInit() {

  }



}
