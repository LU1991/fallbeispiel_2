package de.thm.eps.hebebuehnen.persistence.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="location")
public class Location {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="city")
	private String city;
	@Column(name="description")
	private String description;
	@OneToMany
	@JoinColumn(name="location_id")
	private List<Hebebuehne> hebebuehnen;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Hebebuehne> getHebebuehnen() {
		return hebebuehnen;
	}
	public void setHebebuehnen(List<Hebebuehne> hebebuehnen) {
		this.hebebuehnen = hebebuehnen;
	}
	
}
