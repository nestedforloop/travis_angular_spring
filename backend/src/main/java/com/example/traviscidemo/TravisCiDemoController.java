package com.example.traviscidemo;

import com.example.traviscidemo.model.Greeting;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // deploy angular to 4200
public class TravisCiDemoController {
//    Rather than placing @ResponseBody on every controller method, we place @RestController
//    instead of the ordinary @Controller and then @ResponseBody by default is applied
//    on all resources in that controller.
    @RequestMapping("/greeting")
    public ResponseEntity<Greeting> index() {
        Greeting greeting = new Greeting("Hello, world!");
        return new ResponseEntity<>(greeting, HttpStatus.OK);
    }

// potentially create more endpoints for user entities in the future and create forms for them in angular
//    private final UserRepository userRepository;
//
//    @GetMapping("/users")
//    public List<User> getUsers() {
//        return (List<User>) userRepository.findAll();
//    }
//
//    @PostMapping("/users")
//    void addUser(@RequestBody User user) {
//        userRepository.save(user);
//    }
}
