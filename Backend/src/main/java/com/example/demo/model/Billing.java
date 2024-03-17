package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bill")

public class Billing {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="Customer_Name")
	private String CustomerName;
	
	@Column(name="Item_Name")
	private String ItemName;
	
	@Column(name="Quantity")
	private int Quantity;
	
	@Column(name="PhoneNo")
	private long phoneNo;
	
	public Billing() {
	
	}
	
	public Billing(String customerName, String itemName, int quantity, long phoneNo) {
		super();
		this.CustomerName = customerName;
		this.ItemName = itemName;
		this.Quantity = quantity;
		this.phoneNo = phoneNo;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCustomerName() {
		return CustomerName;
	}
	public void setCustomerName(String customerName) {
		CustomerName = customerName;
	}
	public String getItemName() {
		return ItemName;
	}
	public void setItemName(String itemName) {
		ItemName = itemName;
	}
	public int getQuantity() {
		return Quantity;
	}
	public void setQuantity(int quantity) {
		Quantity = quantity;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	
}
