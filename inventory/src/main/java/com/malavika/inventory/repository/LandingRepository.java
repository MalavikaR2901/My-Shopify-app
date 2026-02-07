package com.malavika.inventory.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.malavika.inventory.model.LandingContent;

public interface LandingRepository extends MongoRepository<LandingContent, String> {
}
