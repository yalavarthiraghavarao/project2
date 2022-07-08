import { Component, OnInit } from '@angular/core';
import { busdetails } from '../Model/Bus';
import { ServiceclassService } from '../serviceclass.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  constructor(private service:ServiceclassService) { }

  ngOnInit(): void {
  }
  message:any;

  addbus(b:busdetails){
    let resp=this.service.addbus(b);
    resp.subscribe((response)=>this.message=response);
  

}
}
