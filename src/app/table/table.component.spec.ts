import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TableComponent } from './table.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PartnersApi } from '../api/partnersApi';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent, ConfirmationDialogComponent ],
      imports: [MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, HttpClientModule, RouterTestingModule,
        MatSnackBarModule, MatDialogModule, BrowserAnimationsModule, ReactiveFormsModule],
      providers: [ PartnersApi ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
