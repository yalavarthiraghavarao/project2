package com.BusReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BusReservation.Model.Booking;
@Repository
public interface RepoBooking  extends JpaRepository<Booking, Integer>{
 
}
