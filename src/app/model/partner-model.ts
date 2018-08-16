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
        this.Locale =  partnerModel.Locale ;
        this.ExpirationTime =  moment(partnerModel.ExpirationTime).month(1).format("YYYY-MM-DD");  
    }

    /**
     * give yoy a plane Json object to update
     */
    toPlane(){
        let partner = _.pick(this, ['Id', 'Name', 'Reference', 'Locale', 'ExpirationTime']);
        //partner.ExpirationTime = moment(this.ExpirationTime).format("YYYY-MM-DD HH:mm Z");
        return partner;
    }
    
    /**
     * give you a plane json object to create (no id)
     */
    toCreate(){
        let partner = _.pick(this, ['Name', 'Reference', 'Locale', 'ExpirationTime']);
        //partner.ExpirationTime = moment(this.ExpirationTime).format("YYYY-MM-DD HH:mm Z");
        return partner;
    }
}
