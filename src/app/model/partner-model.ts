import * as _ from 'lodash';
import * as moment from 'moment';
export class PartnerModel {
    
    Id: Number;
    Name: String;
    Reference:   String;
    Locale: String;
    ExpirationTime: String;
    ExpirationTimeMoment: any;
    

    constructor( partnerModel ){
        this.Id = partnerModel ? partnerModel.Id : -1;
        this.Name = partnerModel? partnerModel.Name : "";
        this.Reference = partnerModel ? partnerModel.Reference : "";
        this.Locale = partnerModel ? partnerModel.Locale : "";
        this.ExpirationTime = partnerModel ? partnerModel.ExpirationTime : "";
        this.ExpirationTimeMoment = partnerModel ? moment(partnerModel.ExpirationTime) : moment(new Date());
    }


    getDateFormated(){
        return this.ExpirationTimeMoment.format('MMMM Do YYYY, h:mm:ss a');
    }
}
