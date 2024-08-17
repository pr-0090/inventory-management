package net.superset.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import net.superset.springboot.model.Users;
import net.superset.springboot.repository.UsersRepository;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("users/v1")
public class UsersController {
	
	@Autowired
	private UsersRepository usersRepository;  
	
	@GetMapping("/list")
	public List<Users> getAllUsers(){
		return usersRepository.findAll();
	}
	
	@PostMapping("/list")
	public Users addUsers(@RequestBody Users users) {
		return usersRepository.save(users);
	}
	
}
