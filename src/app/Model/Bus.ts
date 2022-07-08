export class busdetails{
     busno:number;
     busname:String;
    bustype:String;
    source:String;
    destination:String;
    price:number;
    constructor(busno:number,busname:String, bustype:String,source:String, destination:String,price:number)
        {   this.busno=busno;
            this.busname =busname;
            this.bustype=bustype;
            this.source=source;
            this.destination=destination;
            this.price=price;
        }
        
}