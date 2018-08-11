import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpParams} from '@angular/common/http';

@Injectable()
export class PartnersApi {
    constructor(private http: HttpClient) { }

    getAllPartners(pageNumber = 0, pageSize = 10) {
        //return this.http.get('http://www.mocky.io/v2/5b6de0ae3300008b26a36f9c',
        return this.http.get('http://www.mocky.io/v2/5b6de4b3330000a827a36fa4',
        {
            params: new HttpParams()
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    }

    getOnePartner(){
        return {};
    }

    createNewPartner(){
        return {};
    }

    removePartner(){
        return {};
    }
    
    update(){
        return {};
    }
}
