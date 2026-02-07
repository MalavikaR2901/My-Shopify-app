package com.malavika.inventory.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.malavika.inventory.model.UserRegistration;

public interface UserRegistrationRepository extends MongoRepository<UserRegistration, String> {
    Optional<UserRegistration> findByEmail(String email);
}
 

