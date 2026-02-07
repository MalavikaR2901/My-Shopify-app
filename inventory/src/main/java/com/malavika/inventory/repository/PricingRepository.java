package com.malavika.inventory.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.malavika.inventory.model.PricingPlan;

public interface PricingRepository extends MongoRepository<PricingPlan, String> {
}
