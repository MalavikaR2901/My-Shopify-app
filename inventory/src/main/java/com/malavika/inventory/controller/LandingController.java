package com.malavika.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.malavika.inventory.model.LandingContent;
import com.malavika.inventory.repository.LandingRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // allow frontend calls
@RequestMapping("/api/landing_content")
public class LandingController {

    @Autowired
    private LandingRepository repo;

    // GET all landing content
    @GetMapping
public LandingContent get() {
    return repo.findAll().get(0);
}


    // ADD new landing content
    @PostMapping
    public LandingContent add(@RequestBody LandingContent content) {
        return repo.save(content);
    }

    // DELETE landing content
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        repo.deleteById(id);
    }

    // UPDATE landing content
    @PutMapping("/{id}")
    public LandingContent update(@PathVariable String id, @RequestBody LandingContent content) {
        content.setId(id);
        return repo.save(content);
    }
}
