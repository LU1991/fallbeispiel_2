
package de.thm.eps.hebebuehnen.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import de.thm.eps.hebebuehnen.persistence.entity.Hebebuehne;
import de.thm.eps.hebebuehnen.service.HebebuehneService;

@Controller
public class HebebuehneController {

	@Autowired
	private HebebuehneService hebebuehneService;
	
	@RequestMapping (value="/hebebuehne")
	public @ResponseBody List<Hebebuehne> search(@RequestParam(name = "type", required=true) String type) {
		return hebebuehneService.findByType(type);
	}
	
}
