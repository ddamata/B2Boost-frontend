import { Component, Input, OnInit } from '@angular/core';
import { PartnerModel } from '../model/partner-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerForm implements OnInit {
  
  @Input() partner: PartnerModel;
  expirationDate: String = "";
  partnerEdited: PartnerModel;

  constructor(private router: Router) { 
  }

  ngOnInit() {
    this.partnerEdited = this.partner ? this.partner : new  PartnerModel(undefined);
    this.expirationDate = this.partnerEdited.ExpirationTimeMoment.format('MM/DD/YYYY');
    console.log(this.expirationDate);
  }

  cancelCreate(){
    this.router.navigate(['/partners']);
  }

}
