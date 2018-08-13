import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { PartnersApi } from '../api/partnersApi';
import { Observable } from '../../../node_modules/rxjs';
import { PartnerModel } from '../model/partner-model';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})

export class PartnerComponent implements OnInit {

  //private partner$: any;
  partner: PartnerModel;

  constructor(private route: ActivatedRoute, private partnersApi: PartnersApi, public snackBar: MatSnackBar) {
    //this.partner = new PartnerModel({"Id": 1, "Name": "Bells & Whistles", "Reference": "xxxxxx", "Locale": "en_ES", "ExpirationTime": "2017-10-03T12:18:46+00:00"});
    let id = this.route.snapshot.paramMap.get('id');
    this.getpartner(id);
  }

  ngOnInit() {
  }

  getpartner(id){
    this.partnersApi.getOnePartner(id)
      .subscribe(
        (partner: PartnerModel) => this.partner = new PartnerModel(partner),
        (err) => {
          this.snackBar.open(err.error.message, "close", {
            duration: 20000,
          });
        }
    );
    console.log (this.partner);
  }
  
}
