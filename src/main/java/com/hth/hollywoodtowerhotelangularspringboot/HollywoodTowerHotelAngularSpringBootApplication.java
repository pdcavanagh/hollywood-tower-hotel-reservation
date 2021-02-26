package com.hth.hollywoodtowerhotelangularspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
public class HollywoodTowerHotelAngularSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(HollywoodTowerHotelAngularSpringBootApplication.class, args);
		
		System.out.println("Running app data: ");
	}

}
