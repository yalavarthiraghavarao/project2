package com.BusReservation.MainService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BusReservation.Model.Admin;
import com.BusReservation.Model.Booking;
import com.BusReservation.Model.BusDetails;
import com.BusReservation.Model.UserRegister;
import com.BusReservation.Repository.RepoBooking;
import com.BusReservation.Repository.RepoBus;
import com.BusReservation.Repository.RepoUserRegister;
import com.BusReservation.Repository.Repoadmin;

@Service
public class MainService {
@Autowired
private	RepoUserRegister reporegister;
@Autowired
private RepoBooking repobooking;
@Autowired
private Repoadmin repoadmin;
@Autowired
private RepoBus repobus;

  public String userregister(UserRegister ur) {
	reporegister.save(ur);
	return    "Hello "+ur.getName()+" Registration Successfull";
   }

public int userlogin(UserRegister u) {
	int result=0;
	String email=u.getEmail();
	String password=u.getPassword();
	
	UserRegister userfetch=reporegister.findbyemail(email);
	
   String fetchedpassword=userfetch.getPassword();
	
	boolean r2=password.equals(fetchedpassword);
	if(r2!=true) {return result=0;}
	 else if(r2==true) {return result=1;}
	 return result;

}



  public String booking(Booking b) {
	  int age=b.getAge();
	  String s=b.getSourcetodestination();
	  String[] result=s.split(" ",3);
	  String source=result[0];
	  String destination=result[2];
	
	  BusDetails bd=repobus.Findbystd(source,destination);
	  int price=bd.getPrice();
	  if(age>5 &&age<=60) {
	 		b.setPrice(price);
	 		}if(age>60&&age<=80) {
	 			int d1=(int) (price*0.15);
	 			price=price-d1;
	 			b.setPrice(price);
	 		}if(age>=80) {
	 			int d2=(int) (price*0.25);
	 			price=price-d2;
	 			b.setPrice(price);
	 		}
	  
  	repobooking.save(b);
return "Booking Successful Your Ticket Id is "+b.getId();
}
  public List<Booking> findallbookings() {
		return repobooking.findAll();
		
  }

public void cancel(int id) {
   repobooking.deleteById(id);
}

public int adminlogin(Admin a) {
	int result=0;
	String email=a.getEmail();
	String password=a.getPassword();
	Admin userfetch=repoadmin.findbyemail(email);
	
   String fetchedpassword=userfetch.getPassword();
	
	boolean r2=password.equals(fetchedpassword);
	if(r2!=true) {return result=0;}
	 else if(r2==true) {return result=1;}
	 return result;
	
	
}



public String addbus(BusDetails b) {
	repobus.save(b);
	return "bus details added";
}

public List<BusDetails> getallbusses() {
	
	return  repobus.findAll();
}

public Optional<BusDetails> getbusbyid(int id) {
	
	return repobus.findById(id);
}

public String updatebus(BusDetails b) {
	repobus.save(b);
	return "Bus details updated";
}

public List<BusDetails> deletebus(int id) {
	repobus.deleteById(id);
	return repobus.findAll();
}

public String cancelticket(int id) {
	repobooking.deleteById(id);
	return "Cancellation Done Successfully";
}













}
