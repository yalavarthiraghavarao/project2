import { Component, OnInit } from '@angular/core';
import { userlogin } from '../Model/userlogin';
import { NgForm } from '@angular/forms';
import { ServiceclassService } from '../serviceclass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private service:ServiceclassService,private router:Router) { }

  ngOnInit(): void {
  }
  
  message:any;
Invalid:any;
userlogin(ul:userlogin){
  
let resp=this.service.UserLogin(ul);
resp.subscribe((response)=>this.message=response);


if(this.message==1){
this.router.navigateByUrl('/landingpage');
}
else if(this.message==0){
  this.Invalid="Login Details Are Invalid!!"
 
}
}


}
