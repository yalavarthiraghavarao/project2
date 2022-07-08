import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { userregister } from '../Model/userregister';

import { ServiceclassService } from '../serviceclass.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  
  constructor(private service:ServiceclassService,private router:Router) { }

  ngOnInit(): void {
  }

  message:any;

userregister(ur:userregister){
let resp=  this.service.UserRegister(ur);
resp.subscribe((response)=>this.message=response);
//this.router.navigateByUrl('/Booking')
}





}
