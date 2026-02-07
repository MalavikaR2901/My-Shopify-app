package com.malavika.inventory.controller;

import com.malavika.inventory.model.Subscriber;
import com.malavika.inventory.repository.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/subscribers")
@CrossOrigin(origins = "http://localhost:3000") // Connects to your Next.js frontend
public class SubscriberController {

    @Autowired
    private SubscriberRepository repository;

    // POST: Save a new email from the footer
    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribe(@RequestBody Map<String, String> body) {
        String email = body.get("email");

        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        // Check for duplicates
        if (repository.findByEmail(email).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists!");
        }

        Subscriber newSubscriber = new Subscriber(email);
        repository.save(newSubscriber);
        
        return ResponseEntity.status(HttpStatus.CREATED).body("Subscribed successfully!");
    }

    // GET: List all subscribers (Useful for your admin dashboard later)
    @GetMapping
    public List<Subscriber> getAllSubscribers() {
        return repository.findAll();
    }
}