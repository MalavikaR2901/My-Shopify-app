package com.malavika.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.malavika.inventory.model.Feature;
import com.malavika.inventory.repository.FeatureRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // allow frontend calls
@RequestMapping("/api/features")
public class FeatureController {

    @Autowired
    private FeatureRepository repo;

    // GET all features
    @GetMapping
    public List<Feature> getAll() {
        return repo.findAll();
    }

    // ADD new feature
    @PostMapping("/bulk")
public List<Feature> addBulk(@RequestBody List<Feature> features){
    return repo.saveAll(features);
}


    // DELETE feature
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        repo.deleteById(id);
    }

    // UPDATE feature
    @PutMapping("/{id}")
    public Feature update(@PathVariable String id, @RequestBody Feature feature) {
        feature.setId(id);
        return repo.save(feature);
    }
}
