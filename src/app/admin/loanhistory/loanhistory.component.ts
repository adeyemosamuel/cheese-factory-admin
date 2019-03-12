import { ServerService } from './../../server.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource, MatPaginator} from '@angular/material';

export interface Products {
  accountNo: string;
  clientNo: string;
  principal: string ;
  timestamp: string;
  expiration: string;
}

@Component({
  selector: 'app-loanhistory',
  templateUrl: './loanhistory.component.html',
  styleUrls: ['./loanhistory.component.scss']
})
export class LoanhistoryComponent implements OnInit {
  Products: any = [];

  spinner = false;
  userContact: any;


  displayedColumns: string[] = ['accountNo', 'clientNo', 'principal', 'timestamp', 'expiration'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

 products: Products[];

  constructor(private router: Router, private server: ServerService) { }

  async ngOnInit() {
    this.userContact = JSON.parse(localStorage.getItem('Phone Number'));
    await this.fetchUserLoanHistory(this.userContact);
  }

  async fetchUserLoanHistory(phoneNumber) {
    const response = await this.server.getService(`flashlend/CustomerLoanHistory?phoneNumber=${phoneNumber}`); // `template string
    this.Products = response.data;
    this.dataSource = new MatTableDataSource(this.Products);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
