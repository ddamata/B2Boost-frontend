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
  @Input() submit: Function;
  
  constructor(private router: Router) {}

  ngOnInit() {
  }

  cancelCreate(){
    this.router.navigate(['/partners']);
  }
  
  onSubmit() {  
    this.submit(this.partner);
  }
}
