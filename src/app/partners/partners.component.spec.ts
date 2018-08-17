import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersComponent } from './partners.component';
import { MatFormField } from '@angular/material';
import { TableComponent } from '../table/table.component';

describe('PartnersComponent', () => {
  let component: PartnersComponent;
  let fixture: ComponentFixture<PartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersComponent, MatFormField, TableComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
