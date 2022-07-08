package com.BusReservation.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Booking {
	@Id
	@GeneratedValue
	private int id;
    private String name;
    private String email;
    private String phone;
    private String sourcetodestination;
    private String bustype;
    private String pick;
    private Date date;
    private int noofseats;
    private int price;
    private int age;
	public Booking() {
		super();
	}
	public Booking(int id, String name, String email, String phone, String sourcetodestination, String bustype,
			String pick, Date date, int noofseats, int price, int age) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.sourcetodestination = sourcetodestination;
		this.bustype = bustype;
		this.pick = pick;
		this.date = date;
		this.noofseats = noofseats;
		this.price = price;
		this.age = age;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSourcetodestination() {
		return sourcetodestination;
	}
	public void setSourcetodestination(String sourcetodestination) {
		this.sourcetodestination = sourcetodestination;
	}
	public String getBustype() {
		return bustype;
	}
	public void setBustype(String bustype) {
		this.bustype = bustype;
	}
	public String getPick() {
		return pick;
	}
	public void setPick(String pick) {
		this.pick = pick;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getNoofseats() {
		return noofseats;
	}
	public void setNoofseats(int noofseats) {
		this.noofseats = noofseats;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
    

}
