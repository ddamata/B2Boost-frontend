import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { PartnerModel } from '../model/partner-model';
import { PartnersApi } from '../api/partnersApi';
import * as moment from 'moment';


@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.css']
})
export class CreatePartnerComponent implements OnInit {
  newPartner
  constructor(private partnersApi : PartnersApi,  private router: Router, public snackBar: MatSnackBar) { 
    this.newPartner = new PartnerModel({"Id" : -1, 
      "Name" : "",
      "Reference": "",
      "Locale ": "",
      "ExpirationTime" : moment(new Date()).month(1).format("DD-MM-YYYY"), 
      });
  }

  ngOnInit() {
  }

  createPartner(newPartner: PartnerModel){
    this.partnersApi.createNewPartner(newPartner.toCreate()).subscribe(
      (partner: PartnerModel) => { 
        this.snackBar.open("partner succesfully created", "close", {duration: 20000});
        this.router.navigate(['/partners']);
    },
    (err) => { 
      this.snackBar.open("ERROR: "+err.error.message, "close", {
        duration: 20000,
      });
    });
  }
}
