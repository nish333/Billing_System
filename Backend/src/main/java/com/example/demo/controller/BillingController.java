package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Billing;
import com.example.demo.repository.BillingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BillingController {
	
	@Autowired
	private BillingRepository billingRepository;
	
	//get all billing
	
	@GetMapping("/bill")
	public List<Billing> getAllBilling(){
		return billingRepository.findAll();
	}
	
	//create billing rest api
	
	@PostMapping("/bill")
	public Billing createBilling(@RequestBody Billing billing) {
		return billingRepository.save(billing);
	}
	
	//get billing by id rest api
	
	@GetMapping("/bill/{id}")
	public ResponseEntity<Billing> getBillingById(@PathVariable Long id){
		Billing billing = billingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Billing not exist with id :" + id));
		return ResponseEntity.ok(billing);
	}
	
	//update billing rest api
	
	@PutMapping("/bill/{id}")
	public ResponseEntity<Billing> updateBilling(@PathVariable Long id, @RequestBody Billing billingDetails){
		Billing billing = billingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Billing not exist with id :" + id));
		
		billing.setCustomerName(billingDetails.getCustomerName());
		billing.setItemName(billingDetails.getItemName());
		billing.setQuantity(billingDetails.getQuantity());
		billing.setPhoneNo(billingDetails.getPhoneNo());
		
		Billing updateBilling = billingRepository.save(billing);
		return ResponseEntity.ok(updateBilling);
	}
	
	//delete billing rest api 
	
	@DeleteMapping("/bill/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBilling(@PathVariable Long id){
		Billing billing = billingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Billing not exist with id :" + id));
		billingRepository.delete(billing);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}









