package com.BusReservation.MainController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BusReservation.MainService.MainService;
import com.BusReservation.Model.Admin;
import com.BusReservation.Model.Booking;
import com.BusReservation.Model.BusDetails;
import com.BusReservation.Model.UserRegister;


@CrossOrigin
//(origins="http://localhost:4200/")

@RestController
public class MainController {
	
@Autowired
	private MainService sr;

@PostMapping("/register")
public String userregister(@RequestBody UserRegister ur ) {
	return sr.userregister(ur);	
}

@PostMapping("/userlogin")
public int Userlogin(@RequestBody UserRegister u) {
	return sr.userlogin(u);	
}

@PostMapping(path = "/book")
public String book(@RequestBody  Booking b) {	
	return sr.booking(b);	
}

 @DeleteMapping(path = "/cancelbyid/{id}")
public List<Booking> cancel(@PathVariable int id) {
	sr.cancel(id);
	return sr.findallbookings();
}
 @DeleteMapping(path = "/cancelticketid/{id}")
public String cancelticket(@PathVariable int id) {
	return sr.cancelticket(id);
}
 
 
 @GetMapping(path="/findallbookings")
 public List<Booking> findallbookings() {
	 return sr.findallbookings();
 }
 

 @PostMapping(path = "/adminlogin")
 public int adminlogin(@RequestBody Admin a) {
	 return sr.adminlogin(a);
 }
 
 
 
 @PostMapping(path="/addbus")
 public String addbus(@RequestBody BusDetails b ) {
	System.out.println(b.getBusname());
	 return sr.addbus(b);
 }
 
 @GetMapping(path="/gettall")
 public List<BusDetails> getallbusses() {
	return sr.getallbusses();
 }
 
@GetMapping(path="/getbusbyid/{id}")
 public Optional<BusDetails> getbyid(@PathVariable int id) {
	return sr.getbusbyid(id); 
 }

@PutMapping(path = "/updatebusbyid/{id}")
public String updatebus(@RequestBody BusDetails b) {
	return sr.updatebus(b);
}

@DeleteMapping(path = "/deletebusbyid/{id}")
public List<BusDetails> deletebus(@PathVariable int id) {
	return sr.deletebus(id);
	
	
}











}
