package com.hth.hollywoodtowerhotelangularspringboot.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name = "Room")
public class RoomEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	private Integer roomNumber;

	@NotNull
	private String price;
	
	public RoomEntity() {
		super();
	}

	public RoomEntity(Integer roomNumber, String price) {
		super();
		this.roomNumber = roomNumber;
		this.price = price;
	}

	public Integer getRoomNumber() {
		return roomNumber;
	}

	public void setRoomNumber(Integer roomNumber) {
		this.roomNumber = roomNumber;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	
}