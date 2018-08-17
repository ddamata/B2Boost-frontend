import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartnerComponent } from './create-partner.component';
import  { PartnerForm } from '../partner-form/partner-form.component'
import { PartnersApi } from '../api/partnersApi';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';


describe('CreatePartnerComponent', () => {
  let component: CreatePartnerComponent;
  let fixture: ComponentFixture<CreatePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePartnerComponent, PartnerForm],
      imports: [RouterTestingModule,  ReactiveFormsModule, FormsModule, HttpClientModule, MatSnackBarModule],
      providers: [PartnersApi]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
