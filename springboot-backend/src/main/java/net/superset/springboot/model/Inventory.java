package net.superset.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stock")
public class Inventory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long sNo;
	
	@Column(name="product_id")
	private String productId;
	
	@Column(name="in_date")
	private String date;
	
	@Column(name="supplier_name")
	private String supplierName;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="product_description")
	private String productDescription;
	
	@Column(name="quantity")
	private Integer quantity;
	
	@Column(name="product_value")
	private Integer productValue;
	
	@Column(name="product_type")
	private String productType;
	
	
	public Inventory() {}


	public Inventory(String productId, Integer sNo, String date, String supplierName, String productName,
			String productDescription, Integer quantity, Integer productValue, String productType) {
		super();
		this.productId = productId;
		this.sNo = sNo;
		this.date = date;
		this.supplierName = supplierName;
		this.productName = productName;
		this.productDescription = productDescription;
		this.quantity = quantity;
		this.productValue = productValue;
		this.productType = productType;
	}


	public String getProductId() {
		return productId;
	}


	public void setProductId(String productId) {
		this.productId = productId;
	}


	public Long getsNo() {
		return sNo;
	}


	public void setsNo(Long sNo) {
		this.sNo = sNo;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getSupplierName() {
		return supplierName;
	}


	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public String getProductDescription() {
		return productDescription;
	}


	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}


	public Integer getQuantity() {
		return quantity;
	}


	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}


	public Integer getProductValue() {
		return productValue;
	}


	public void setProductValue(Integer productValue) {
		this.productValue = productValue;
	}


	public String getProductType() {
		return productType;
	}


	public void setProductType(String productType) {
		this.productType = productType;
	}


	


	

	
	
}
