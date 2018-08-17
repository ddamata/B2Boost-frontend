import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { PartnersApi }  from './api/partnersApi';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PartnersComponent } from './partners/partners.component';
import { TableComponent } from './table/table.component';
import { PartnerForm } from './partner-form/partner-form.component';
import { PartnerComponent } from './partner/partner.component';
import { CreatePartnerComponent } from './create-partner/create-partner.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({

  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    MenuComponent,
    PartnersComponent,
    TableComponent,
    PartnerForm,
    PartnerComponent,
    CreatePartnerComponent,
    ConfirmationDialogComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    AppRoutingModule
  ],

  providers: [ PartnersApi ],

  bootstrap: [ AppComponent ],

  entryComponents: [ ConfirmationDialogComponent ],

})
export class AppModule { }
