import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PartnersApi } from '../api/partnersApi';
import { tap, merge } from 'rxjs/operators';
import { PartnerDataSource } from '../model/partner-data-source';
import { MatPaginator } from '@angular/material/paginator';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'reference', 'locale', 'expirationTime'];
  dataSource : PartnerDataSource;
  dataSourceLength: number = 0;
  pageSizeOptions: number[] = [10,15,20];
  pageSize: number = 10;
  page: number = 0;
  seachFilter: string = ""; 
  filter = new FormControl('filter', Validators.required);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  partner

  

  constructor(private partnersApi: PartnersApi, private route: ActivatedRoute, public snackBar: MatSnackBar) { 
    //this.getTableData();
  }

  ngOnInit() {
    this.dataSource = new  PartnerDataSource( this.partnersApi, this.snackBar );
    this.dataSource.loadpartner(this.paginator.pageIndex, this.paginator.pageSize);
    this.dataSourceLength = this.dataSource.getSize();
  }

  ngAfterViewInit() {
    this.paginator.page
          .pipe(
              tap(() => this.loadParterPage())
          )
          .subscribe();
  }

  loadParterPage() {
   this.dataSource.loadpartner(this.paginator.pageIndex, this.paginator.pageSize);
  }

  onRowClicked(row){
    alert("alert: "+ row );
  }

}
