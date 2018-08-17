import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PartnersApi } from '../api/partnersApi';
import { PartnerModel } from '../model/partner-model';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})

export class PartnerComponent implements OnInit {

 
  partner: PartnerModel ;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private partnersApi: PartnersApi, public snackBar: MatSnackBar) {
   this.partner = new PartnerModel({"Id" : -1, 
   "Name" : "",
   "Reference": "",
   "Locale ": "",
   "ExpirationTime" : moment(new Date()).month(1).format("DD-MM-YYYY"), 
   });
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getpartner(id);
  }

  getpartner(id){
    this.partnersApi.getOnePartner(id)
      .subscribe(
        (partner: PartnerModel) => this.partner = new PartnerModel(partner),
        (err) => {
          this.snackBar.open("ERROR: "+err.error.message, "close", {
            duration: 20000,
          });
        }
    );
    console.log (this.partner);
  }
  
  updatePartner(partner: PartnerModel){
    this.partnersApi.update(partner.toPlane()).subscribe(
      (partner: PartnerModel) => { 
        this.snackBar.open("partner succesfully updated", "close", {duration: 20000});
        this.router.navigate(['/partners']);
    },
    (err) => { 
      this.snackBar.open("ERROR: "+err.error.message, "close", {
        duration: 20000,
      });
    });
  }
}
