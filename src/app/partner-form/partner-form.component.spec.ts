import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerForm } from './partner-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing';
import { PartnersApi } from '../api/partnersApi';
import { PartnerModel } from '../model/partner-model';

describe('PartnerFormComponent', () => {
  let component: PartnerForm;
  let fixture: ComponentFixture<PartnerForm>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerForm ],
      imports: [ BrowserModule, FormsModule, ReactiveFormsModule, RouterTestingModule ],
      providers: [ PartnersApi ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
