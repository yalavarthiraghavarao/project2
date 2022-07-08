export class book{
 name:String;
 email:String;
 phone:number;
 sourcetodestination:String;
 bustype:String;
 pick:String;
 date:Date;
 noofseats:number;
 age:number;
 constructor(name:String,
    email:String,
    phone:number,
    sourcetodestination:String,
    bustype:String,
    pick:String,
    date:Date,
    noofseats:number,
    age:number){

      this.name  =name;
   this.email= email;
   this.phone= phone;
   this.sourcetodestination= sourcetodestination;
  this.bustype= bustype;
   this.pick= pick;
   this.date=  date;
  this.noofseats= noofseats;
  this.age= age;

 }
}