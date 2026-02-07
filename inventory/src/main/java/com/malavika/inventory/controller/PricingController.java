package com.malavika.inventory.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.malavika.inventory.model.PricingPlan;
import com.malavika.inventory.repository.PricingRepository;

@RestController
@RequestMapping("/api/pricing_plans")
@CrossOrigin(origins = "http://localhost:3000")
public class PricingController {

    @Autowired
    private PricingRepository repo;

    @GetMapping
    public List<PricingPlan> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public PricingPlan add(@RequestBody PricingPlan plan) {
        return repo.save(plan);
    }

    @PutMapping("/{id}")
    public PricingPlan update(@PathVariable String id, @RequestBody PricingPlan plan) {
        plan.setId(id);
        return repo.save(plan);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        repo.deleteById(id);
    }
}

