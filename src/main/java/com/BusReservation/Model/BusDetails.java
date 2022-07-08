package com.BusReservation.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bus")
public class BusDetails {
	@Id
	@GeneratedValue
	private int id;
	
	private String busname;
	private String bustype;
	private String source;
	private String destination;
	private int busno;
	private int price;
	public BusDetails() {
		super();
	}
	public BusDetails(int id, String busname, String bustype, String source, String destination, int busno, int price) {
		super();
		this.id = id;
		this.busname = busname;
		this.bustype = bustype;
		this.source = source;
		this.destination = destination;
		this.busno = busno;
		this.price = price;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBusname() {
		return busname;
	}
	public void setBusname(String busname) {
		this.busname = busname;
	}
	public String getBustype() {
		return bustype;
	}
	public void setBustype(String bustype) {
		this.bustype = bustype;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public int getBusno() {
		return busno;
	}
	public void setBusno(int busno) {
		this.busno = busno;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
}
