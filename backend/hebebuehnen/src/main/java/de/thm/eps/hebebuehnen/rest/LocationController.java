package de.thm.eps.hebebuehnen.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import de.thm.eps.hebebuehnen.persistence.entity.Location;
import de.thm.eps.hebebuehnen.service.LocationService;

@Controller
public class LocationController {
	@Autowired
	private LocationService locationService;
	
	@RequestMapping(value="/locations")
	public @ResponseBody List<Location> search(@RequestParam(name = "city", required=false, defaultValue="") String city) {
		
		if(city.equals("")) {
			return locationService.findAll();
		}
		
		return locationService.findByCity(city);
	}
}
