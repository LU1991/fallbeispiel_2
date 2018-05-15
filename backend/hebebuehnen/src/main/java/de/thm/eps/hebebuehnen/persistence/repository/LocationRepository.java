package de.thm.eps.hebebuehnen.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import de.thm.eps.hebebuehnen.persistence.entity.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {
	List<Location> findByCity(String city);
}
