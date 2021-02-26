package com.hth.hollywoodtowerhotelangularspringboot.repository;

//import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.hth.hollywoodtowerhotelangularspringboot.entity.RoomEntity;

public interface RoomRepository extends CrudRepository<RoomEntity, Long> {
	
	Optional<RoomEntity> findById(Long id);
	
}
