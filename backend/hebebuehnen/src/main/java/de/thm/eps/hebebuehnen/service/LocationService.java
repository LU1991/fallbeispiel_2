package de.thm.eps.hebebuehnen.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.thm.eps.hebebuehnen.persistence.entity.Location;
import de.thm.eps.hebebuehnen.persistence.repository.LocationRepository;

@Service
public class LocationService {
	@Autowired
	private LocationRepository locationRepository;
	
	public List<Location> findByCity(String city){
		return locationRepository.findByCity(city);
	}

	public List<Location> findAll() {
		return locationRepository.findAll();
	}
}
