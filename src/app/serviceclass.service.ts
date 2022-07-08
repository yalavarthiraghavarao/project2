import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminlogin } from './Model/adminlogin';
import { book } from './Model/bookticket';
import { busdetails } from './Model/Bus';
import { userlogin } from './Model/userlogin';
import { userregister } from './Model/userregister';

@Injectable({
  providedIn: 'root'
})

export class ServiceclassService {

  constructor(private http:HttpClient) {} 


public UserRegister(ur:userregister){
 
return this.http.post("http://localhost:8081/register",ur,{responseType:'text'as'json'});
}

public UserLogin(ul:userlogin){
  
 return this.http.post("http://localhost:8081/userlogin",ul,{responseType:'text' as'json'});
}
public Adminlogin(al:adminlogin){
  return this.http.post("http://localhost:8081/adminlogin",al,{responseType:'text' as'json'});
}
public addbus(b:busdetails){
return this.http.post("http://localhost:8081/addbus",b,{responseType:'text' as'json'});
}

public findallbussess(){
  return this.http.get("http://localhost:8081/gettall");
}

public deletebusbyid(id:number){
  return this.http.delete("http://localhost:8081/deletebusbyid/"+id);
}
public book(f:book){
  console.log("service");
  return this.http.post("http://localhost:8081/book",f,{responseType:'text' as'json'});
}

public findallbookings(){
  return this.http.get("http://localhost:8081/findallbookings");
}

public deleteticketbyid(id:number){
  return this.http.delete("http://localhost:8081/cancelbyid/"+id);
}
public deleteticketid(id:number){
  console.log(id);
  return this.http.delete("http://localhost:8081/cancelticketid/"+id,{responseType:'text'as'json'});
}




}

