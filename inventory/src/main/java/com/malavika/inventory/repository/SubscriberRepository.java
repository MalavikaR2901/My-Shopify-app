package com.malavika.inventory.repository;

import com.malavika.inventory.model.Subscriber;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface SubscriberRepository extends MongoRepository<Subscriber, String> {
    // This allows us to check if an email is already in the database
    Optional<Subscriber> findByEmail(String email);
}
