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
        this.Id = partnerModel.Id;
        this.Name = partnerModel.Name;
        this.Reference = partnerModel.Reference;
        this.Locale = partnerModel.Locale;
        this.ExpirationTime = partnerModel.ExpirationTime;
        this.ExpirationTimeMoment = moment(partnerModel.ExpirationTime);
    }

    getDateFormated(){
        return this.ExpirationTimeMoment.format('MMMM Do YYYY, h:mm:ss a');
    }
}
