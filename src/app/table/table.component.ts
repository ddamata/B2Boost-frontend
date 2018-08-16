import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { PartnerDataSource } from '../model/partner-data-source';
import { PartnersApi } from '../api/partnersApi';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'name', 'reference', 'locale', 'expirationTime', 'Delete'];
  dataSource: PartnerDataSource;
  dataSourceLength: number = 0;
  pageSizeOptions: number[] = [10, 15, 20];
  pageSize: number = 10;
  page: number = 0;
  seachFilter: string = "";
  filter = new FormControl('filter', Validators.required);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  partner



  constructor(private partnersApi: PartnersApi, private router: Router, public snackBar: MatSnackBar, 
      public mdDialog: MatDialog ) {
   
  }

  ngOnInit() {
    this.dataSource = new PartnerDataSource(this.partnersApi, this.snackBar);
    this.dataSource.loadpartner(this.paginator.pageIndex, this.paginator.pageSize);
    this.dataSourceLength = this.dataSource.getSize();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadParterPage())
      );
  }

  loadParterPage() {
    this.dataSource.loadpartner(this.paginator.pageIndex, this.paginator.pageSize);
  }

  onRowClicked(row) {
    this.router.navigate(['/partner', row.Id]);
  }

  deleteIcon(id) {
    let data = {
      'delete': (id) => {
        this.partnersApi.removePartner(id).subscribe(
          responce => {
            this.ngOnInit(); 
            this.snackBar.open("partner succesfully delete", "close", {
              duration: 2000,
            });
           },
          err => {
            this.snackBar.open("ERROR: "+err.error.message, "close", {
              duration: 20000,
            });
          }
        );
      },
      'go': id,
      'text': "Sure you want to delete this partner",
      'title': "Delte partner"
    };
    this.mdDialog.open(ConfirmationDialogComponent, {
      data: data
    });
  }

}
