import { Component, OnInit } from '@angular/core';
import { ServiceclassService } from '../serviceclass.service';

@Component({
  selector: 'app-viewdeleteticket',
  templateUrl: './viewdeleteticket.component.html',
  styleUrls: ['./viewdeleteticket.component.css']
})
export class ViewdeleteticketComponent implements OnInit {

  constructor(private service:ServiceclassService) { }

 
  data:any
  ngOnInit(): void {
    let resp=this.service.findallbookings();
    resp.subscribe((response)=>this.data=response);
   }

   public deletebusbyid(id:number){
    let resp=this.service.deleteticketbyid(id);
    resp.subscribe((response)=>this.data=response);

   }
}
