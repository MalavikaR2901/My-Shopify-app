package com.malavika.inventory.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "subscribers")
public class Subscriber {
    @Id
    private String id;
    private String email;
    private LocalDateTime subscribedAt;

    // 1. ADD THIS: The constructor you are calling in the Controller
    public Subscriber(String email) {
        this.email = email;
        this.subscribedAt = LocalDateTime.now();
    }

    // 2. ADD THIS: MongoDB needs an empty constructor to work properly
    public Subscriber() {
    }

    // Standard Getters and Setters...
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    // etc...
}