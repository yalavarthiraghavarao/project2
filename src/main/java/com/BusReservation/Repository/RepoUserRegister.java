package com.BusReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.BusReservation.Model.UserRegister;
@Repository
public interface RepoUserRegister extends JpaRepository<UserRegister, Integer> {
    
	@Query(value="Select * from userregister where email=?",nativeQuery = true)
	UserRegister findbyemail(String email);

}
