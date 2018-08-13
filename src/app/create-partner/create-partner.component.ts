import { Component, OnInit } from '@angular/core';

import { PartnerModel } from '../model/partner-model';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.css']
})
export class CreatePartnerComponent implements OnInit {
  newPartner
  constructor() { 
    this.newPartner = new PartnerModel(undefined);
  }

  ngOnInit() {
  }

}
