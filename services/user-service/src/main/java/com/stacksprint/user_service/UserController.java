package com.stacksprint.user_service;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// This tells Spring Boot that this class handles web requests
@RestController
@RequestMapping("/api/users")
public class UserController {
    // When someone visits GET /api/users, run this method
    @GetMapping
    public Map<String, Object> getUsers() {
        // Spring automatically converts this Java Map into JSON!
        return Map.of(
            "message", "User service is running!",
            "totalUsers", 99
        );
    }
}