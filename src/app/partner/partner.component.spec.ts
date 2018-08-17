import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerComponent } from './partner.component';
import  { PartnerForm } from '../partner-form/partner-form.component'
import { PartnersApi } from '../api/partnersApi';
import { RouterTestingModule } from '@angular/router/testing';

describe('PartnerComponent', () => {
  let component: PartnerComponent;
  let fixture: ComponentFixture<PartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerComponent, PartnerForm ],
      imports: [RouterTestingModule],
      providers: [PartnersApi]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
