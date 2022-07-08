import { Component, OnInit } from '@angular/core';
import { adminlogin } from '../Model/adminlogin';
import { NgForm } from '@angular/forms';
import { ServiceclassService } from '../serviceclass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private service:ServiceclassService,private router:Router) { }

  ngOnInit(): void {
  }
  
  message:any;
  Invalid:any;
  adminlogin(al:adminlogin){

    let resp=this.service.Adminlogin(al);
    resp.subscribe((response)=>this.message=response);
   if(this.message==1){
    this.router.navigateByUrl('/adminoperations');

   }else if(this.message==0){
     
    this.Invalid="Login Details Are Invalid";
    

   }
  }

}
