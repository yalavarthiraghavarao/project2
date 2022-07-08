import { Component, OnInit } from '@angular/core';
import { book } from '../Model/bookticket';
import { ServiceclassService } from '../serviceclass.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private service:ServiceclassService) { }

  data:any;
  ngOnInit(): void {
    let resp=this.service.findallbussess();
    resp.subscribe((response)=>this.data=response);
  }
message:any;
  booking(f:book){
    console.log("component");

    console.log(f);
  let resp=this.service.book(f);
resp.subscribe((response)=>this.message=response);
  }
}
