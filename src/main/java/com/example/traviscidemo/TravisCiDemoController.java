package com.example.traviscidemo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TravisCiDemoController {
//    Rather than placing @ResponseBody on every controller method, we place @RestController
//    instead of the ordinary @Controller and @ResponseBody by default is applied
//    on all resources in that controller.
    @RequestMapping("/")
    public ResponseEntity<Greeting> index() {
        Greeting greeting = new Greeting("Hello, world!");
        return new ResponseEntity<>(greeting, HttpStatus.OK);
    }
}
