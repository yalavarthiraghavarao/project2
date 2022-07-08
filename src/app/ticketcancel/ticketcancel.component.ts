import { Component, OnInit } from '@angular/core';
import { cancelticket } from '../Model/delete';
import { ServiceclassService } from '../serviceclass.service';

@Component({
  selector: 'app-ticketcancel',
  templateUrl: './ticketcancel.component.html',
  styleUrls: ['./ticketcancel.component.css']
})
export class TicketcancelComponent implements OnInit {

  constructor(private service:ServiceclassService) { }

  ngOnInit(): void {
  }
id:number=0; message:any;
public Cancelticket(f:cancelticket){
 console.log(f);
  this.id=f.id;
  console.log(this.id);
let resp=this.service.deleteticketid(this.id);
resp.subscribe((response)=>this.message=response);
}

}
