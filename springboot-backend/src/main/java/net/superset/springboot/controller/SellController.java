package net.superset.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.superset.springboot.model.Sell;
import net.superset.springboot.repository.SellRepository;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/sell/v1")
public class SellController {
	
	@Autowired
	private SellRepository sellRepository;
	
	//get all_list
	@GetMapping("/list")
	public List<Sell> getAllSell(){
		return sellRepository.findAll();
		
	}
	@PostMapping("/list")
	public Sell addSell(@RequestBody Sell sell) {
		return sellRepository.save(sell);
	}

}
