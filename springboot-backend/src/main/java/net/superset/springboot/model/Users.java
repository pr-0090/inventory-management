package net.superset.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sNo;
	
	@Column(name="name")
	private String name;
	
	@Column(name="user_id")
	private String userId;
	
	@Column(name="password")
	private String password;
	
	public Users() {
		// TODO Auto-generated constructor stub
	}

	public Users(int sNo, String name, String userId, String password) {
		super();
		this.sNo = sNo;
		this.name = name;
		this.userId = userId;
		this.password = password;
	}

	public int getsNo() {
		return sNo;
	}

	public void setsNo(int sNo) {
		this.sNo = sNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
