import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { PartnerModel } from '../model/partner-model';

@Injectable()
export class PartnersApi {
    constructor(private http: HttpClient) { }

    getAllPartners(pageNumber = 0, pageSize = 10) {
        //return this.http.get('api/partners/';
        return this.http.get('http://www.mocky.io/v2/5b6de0ae3300008b26a36f9c', //200
            //return this.http.get('http://www.mocky.io/v2/5b6de4b3330000a827a36fa4',//405
            // return this.http.get('http://www.mocky.io/v2/5b7433bf3500008720531e2c');

            {
                params: new HttpParams()
                    .set('pageNumber', pageNumber.toString())
                    .set('pageSize', pageSize.toString())
            });
    }

    getOnePartner(id) {
        //return this.http.get('api/partners/'+id);
        return this.http.get<PartnerModel>('http://www.mocky.io/v2/5b70802f2e0000840093664d', {});//200
        //return this.http.get<PartnerModel>('http://www.mocky.io/v2/5b7433bf3500008720531e2c');//500
    }

    createNewPartner(partner) {

        // return this.http.post<PartnerModel>('api/partners/', {
        return this.http.post<PartnerModel>('http://www.mocky.io/v2/5b75b4ad2e00004e005361f7',//201
        //return this.http.post<PartnerModel>('http://www.mocky.io/v2/5b75af0c2e00005c005361de',//400
        //return this.http.post<PartnerModel>('http://www.mocky.io/v2/5b75aee62e00006f005361dc',//500
        partner);
    }

    removePartner(id) {
        //return this.http.delete('API/partners/'+id);
        return this.http.delete('http://www.mocky.io/v2/5b74b44d3500008720531f32')//;200
        //return this.http.delete('http://www.mocky.io/v2/5b7433bf3500008720531e2c');//500
    }

    update(partner) {
        //return this.http.put<PartnerModel>('api/partners/', 
        return this.http.put<PartnerModel>('http://www.mocky.io/v2/5b75bf012e0000560053620c', //200
        //return this.http.put<PartnerModel>('http://www.mocky.io/v2/5b75bf3d2e00006e0053620d', //500
        //return this.http.put<PartnerModel>('http://www.mocky.io/v2/5b75bf732e0000560053620e', //404
        //return this.http.put<PartnerModel>('http://www.mocky.io/v2/5b75bf9b2e0000560053620f', //400
        partner);
    }
}
