import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerComponent } from './partner/partner.component';
import { CreatePartnerComponent } from './create-partner/create-partner.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'partners', component: PartnersComponent },
  { path: 'partner/:id', component: PartnerComponent },
  { path: 'newPartner', component: CreatePartnerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
