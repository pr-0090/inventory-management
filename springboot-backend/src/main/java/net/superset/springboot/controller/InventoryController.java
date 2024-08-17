package net.superset.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.superset.springboot.exception.ResourceNotFoundException;
import net.superset.springboot.model.Inventory;
import net.superset.springboot.repository.InventoryRepository;


@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class InventoryController {

	@Autowired
	private InventoryRepository inventoryRepository;
	
	//get all_list
	@GetMapping("/list")
	public List<Inventory> getAllInventory(){
		return inventoryRepository.findAll();
	}
	@PostMapping("/list")
	public Inventory addStock(@RequestBody Inventory inventory) {
		return inventoryRepository.save(inventory);
	}
	
	@GetMapping("/list/{id}")
	public ResponseEntity<Inventory> getInventoryById(@PathVariable Long id) {
		
		Inventory inventory = inventoryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Inventory not exist with id : "+id));
		return ResponseEntity.ok(inventory);
	}
	
	@PutMapping("/list/{id}")
	public ResponseEntity<Inventory>updateInventory(@PathVariable Long id, @RequestBody Inventory inventoryDetails) {
		Inventory inventory = inventoryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("inventory not exist id: "+id));
		
		inventory.setDate(inventoryDetails.getDate());
		inventory.setProductDescription(inventoryDetails.getProductDescription());
		inventory.setProductId(inventoryDetails.getProductId());
		inventory.setProductName(inventoryDetails.getProductName());
		inventory.setProductType(inventoryDetails.getProductType());
		inventory.setProductValue(inventoryDetails.getProductValue());
		inventory.setQuantity(inventoryDetails.getQuantity());
		inventory.setSupplierName(inventoryDetails.getSupplierName());

		Inventory updateInventory = inventoryRepository.save(inventory);
		return ResponseEntity.ok(updateInventory);
	}
}
