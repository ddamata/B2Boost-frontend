import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newPartner(){
    this.router.navigate(['/newPartner']);
  }

}
