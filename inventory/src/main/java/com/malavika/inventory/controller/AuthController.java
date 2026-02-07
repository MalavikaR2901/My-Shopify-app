package com.malavika.inventory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.malavika.inventory.model.UserRegistration;
import com.malavika.inventory.repository.UserRegistrationRepository;
import java.util.List;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRegistrationRepository repo;

    // GET ALL USERS
@GetMapping("/register")
public List<UserRegistration> getAllUsers() {
    return repo.findAll();
}


    // REGISTER
    @PostMapping("/register")
    public UserRegistration register(@RequestBody UserRegistration user) {

        // simple validation
        if (repo.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        return repo.save(user);
    }

    // LOGIN (basic)
    @PostMapping("/login")
    public UserRegistration login(@RequestBody UserRegistration req) {

        return repo.findByEmail(req.getEmail())
            .filter(u -> u.getPassword().equals(req.getPassword()))
            .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }
     @PutMapping("/register/{id}")
    public UserRegistration updateUser(
            @PathVariable String id,
            @RequestBody UserRegistration updatedUser) {

        UserRegistration user = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        user.setRole(updatedUser.getRole());

        return repo.save(user);
    }
}

