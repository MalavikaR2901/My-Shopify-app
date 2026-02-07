package com.malavika.inventory.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.malavika.inventory.model.Feature;

public interface FeatureRepository extends MongoRepository<Feature, String> {
}
