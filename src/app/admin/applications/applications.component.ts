import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';


export interface Products {
  productImage: string;
  productPricing:
    {
        productSKU: string,
        productPrice: number,
        productPromoPrice: number,
        productQuantity: number,
    };
    productDetails:
    {
        productDescription: string,
        productKeyFeatures: string,
        productMeasurement:
            {
                dimensions: string,
                weight: number,
            }
        ,
        productWarranty: string,
        productAtributes:
            {
                displayFeatures: string,
                displaySize: number,
                hardDisk: number,
                ramSize: number,
                storageCapacity: number,
                cpuSpeed: number,
                opticalZoom: number,
                megaPixels: number,
                operatingSystem: string,
                otherFeatures: string
            }
    };
    productInformation:
    {
        productName: string,
        productBrand: string,
        productModel: string,
        productColor: string,
    };
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
    // Mine

    Products = [];
    Categories = [];
    spinner = false;
    // Close Here

    displayedColumns: string[] = ['productInformation.productName', 'productInformation.productBrand', 'productInformation.productColor',
     'productPricing.productQuantity',
    'productPricing.productPrice', 'productImage', 'edit', 'delete'];
    dataSource;

   products: Products[];

  constructor(public dialog: MatDialog, private server: ServerService, private router: Router) { }

  async ngOnInit() {
    this.toggleSpinner();
    const response = await this.server.getService('products');
    this.Products = response;
    this.dataSource = new MatTableDataSource(this.Products);

    console.log('Table Data', this.products);
    // await this.getAllProducts();
    this.toggleSpinner();
  }


toggleSpinner(): void {
  this.spinner = !this.spinner;
}

}
