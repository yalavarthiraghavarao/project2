import { Component, OnInit } from '@angular/core';
import { ServiceclassService } from '../serviceclass.service';

@Component({
  selector: 'app-viewdeletebus',
  templateUrl: './viewdeletebus.component.html',
  styleUrls: ['./viewdeletebus.component.css']
})
export class ViewdeletebusComponent implements OnInit {

  constructor(private service:ServiceclassService) { }

  data:any
  ngOnInit(): void {
    let resp=this.service.findallbussess();
    resp.subscribe((response)=>this.data=response);
   }

   public deletebusbyid(id:number){
    let resp=this.service.deletebusbyid(id);
    resp.subscribe((response)=>this.data=response);

   }
}