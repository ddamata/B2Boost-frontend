import { PartnerModel } from './partner-model';
import { CollectionViewer, DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from 'rxjs';
import { PartnersApi } from '../api/partnersApi';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';




export class PartnerDataSource implements DataSource<PartnerModel> {
    
    private partnerSubject = new BehaviorSubject<PartnerModel[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();
   

    constructor(private partnersApi: PartnersApi, public snackBar: MatSnackBar) {}

    connect(collectionViewer: CollectionViewer): Observable<PartnerModel[]> {
        return this.partnerSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.partnerSubject.complete();
        this.loadingSubject.complete();
    }

    loadpartner( pageIndex, pageSize) {

        this.loadingSubject.next(true);

        this.partnersApi.getAllPartners(pageIndex, pageSize)
            .subscribe(
                (partners: PartnerModel[]) => {
                    let parnertsModel = partners.map(element => new PartnerModel(element));
                    this.partnerSubject.next(parnertsModel)
                    this.loadingSubject.next(false)
                },
                (err) => {
                    this.loadingSubject.next(false)
                    this.snackBar.open( err.error.message, "close" , {
                        duration: 20000,
                      });
                }
        );
    } 
    
    getSize(){
       return this.partnerSubject.value.length;
    }
}
