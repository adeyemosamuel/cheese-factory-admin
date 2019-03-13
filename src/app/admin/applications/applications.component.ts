import { UsermodalComponent } from './../../component/usermodal/usermodal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../../server.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {MatTableDataSource, MatPaginator} from '@angular/material';


export interface Products {
  Username: string;
  RoleName: string;
  IsActive: boolean ;
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {


    Products = [];
    spinner = false;


    displayedColumns: string[] = ['Username', 'RoleName', 'IsActive', 'visibility', 'edit', 'delete', ];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;

   products: Products[];

  constructor(public dialog: MatDialog, private server: ServerService, private router: Router) { }

  async ngOnInit() {
   await this.getAllUsers();
  }


toggleSpinner(): void {
  this.spinner = !this.spinner;
}

async getAllUsers() {
  const response = await this.server.getService('user/GetAll');
  this.Products = response.Data;
  this.dataSource = new MatTableDataSource(this.Products);
  this.dataSource.paginator = this.paginator;
}

addUsers(): void  {
  const dialogRef = this.dialog.open(UsermodalComponent, {
    minWidth: '30vw',
    height: '50%',
});
}



applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
