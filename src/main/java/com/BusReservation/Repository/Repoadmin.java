package com.BusReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.BusReservation.Model.Admin;
import com.BusReservation.Model.UserRegister;
@Repository
public interface Repoadmin extends JpaRepository<Admin, Integer> {

	@Query(value = "select * from admin where email=?",nativeQuery = true)
	Admin findbyemail(String email);

}
