package com.hth.hollywoodtowerhotelangularspringboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.hth.hollywoodtowerhotelangularspringboot.entity.RoomEntity;
import com.hth.hollywoodtowerhotelangularspringboot.repository.RoomRepository;

@Component
public class H2Bootstrap implements CommandLineRunner {

	@Autowired
	RoomRepository roomRepository;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("Bootstraping data: ");
		
		roomRepository.save(new RoomEntity(405, "200"));
		roomRepository.save(new RoomEntity(406, "225"));
		roomRepository.save(new RoomEntity(407, "250"));
		
		Iterable<RoomEntity> itr = roomRepository.findAll();
		
		System.out.println("Printing out data: ");
		for(RoomEntity room : itr) {
			System.out.println(room.getRoomNumber());
		}
	}
	
	

}
