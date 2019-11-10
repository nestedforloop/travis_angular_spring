package com.example.traviscidemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TravisCiDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravisCiDemoApplication.class, args);
	}

// potentially do more with this app in the future and then populate the H2 db with dummy data first
//	@Bean
//	CommandLineRunner init(UserRepository userRepository) {
//		return args -> {
//			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
//				User user = new User(name, name.toLowerCase() + "@domain.com");
//				userRepository.save(user);
//			});
//			userRepository.findAll().forEach(System.out::println);
//		};
//	}
}
