package de.thm.eps.hebebuehnen.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import de.thm.eps.hebebuehnen.persistence.entity.Hebebuehne;

public interface HebebuehneRepository extends JpaRepository<Hebebuehne, Integer>{
	List<Hebebuehne> findByType(String type);
}
