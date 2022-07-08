package com.BusReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.BusReservation.Model.BusDetails;
@Repository
public interface RepoBus extends JpaRepository<BusDetails, Integer> {

	@Query(value = "select * from Bus where source=? and destination=?",nativeQuery = true)
	BusDetails Findbystd(String source, String destination);

}
