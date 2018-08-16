import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { PartnerModel } from '../model/partner-model';
import { Observable } from 'rxjs';

@Injectable()
export class PartnersApi {
    constructor(private http: HttpClient) { }
    /** 
    * gets you a list with the partner depending of the page size 
    */
    getAllPartners (pageNumber = 0, pageSize = 10) :   Observable<Object>{
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
    /**
     * gives you one partner sarching by is
     * @param id : partner id
     */
    getOnePartner(id) : Observable<Object>{
        //return this.http.get('api/partners/'+id);
        return this.http.get<PartnerModel>('http://www.mocky.io/v2/5b70802f2e0000840093664d', {});//200
        //return this.http.get<PartnerModel>('http://www.mocky.io/v2/5b7433bf3500008720531e2c');//500
    }
    /**
     * creates one partner
     * @param partner partner object
     */
    createNewPartner(partner) : Observable<Object> {

        // return this.http.post<PartnerModel>('api/partners/', {
        return this.http.post<PartnerModel>('http://www.mocky.io/v2/5b75b4ad2e00004e005361f7',//201
        //return this.http.post<PartnerModel>('http://www.mocky.io/v2/5b75af0c2e00005c005361de',//400
        //return this.http.post<PartnerModel>('http://www.mocky.io/v2/5b75aee62e00006f005361dc',//500
        partner);
    }
    /**
     * deletes a partner
     * @param id partner id
     */
    removePartner(id) : Observable<Object> {
        //return this.http.delete('API/partners/'+id);
        return this.http.delete('http://www.mocky.io/v2/5b74b44d3500008720531f32')//;200
        //return this.http.delete('http://www.mocky.io/v2/5b7433bf3500008720531e2c');//500
    }
    /**
     * updates a partner
     * @param partner partner object
     */
    update(partner) : Observable<Object> {
        //return this.http.put<PartnerModel>('api/partners/', 
        return this.http.put<PartnerModel>('http://www.mocky.io/v2/5b75bf012e0000560053620c', //200
        //return this.http.put<PartnerModel>('http://www.mocky.io/v2/5b75bf3d2e00006e0053620d', //500
        //return this.http.put<PartnerModel>('http://www.mocky.io/v2/5b75bf732e0000560053620e', //404
        //return this.http.put<PartnerModel>('http://www.mocky.io/v2/5b75bf9b2e0000560053620f', //400
        partner);
    }
}
