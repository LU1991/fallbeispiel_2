package de.thm.eps.hebebuehnen.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.thm.eps.hebebuehnen.persistence.entity.Hebebuehne;
import de.thm.eps.hebebuehnen.persistence.repository.HebebuehneRepository;

@Service
public class HebebuehneService {
	@Autowired
	private HebebuehneRepository hebebuehneRepository;
	
	public List<Hebebuehne> findByType(String type){
		return hebebuehneRepository.findByType(type);
	}
}
