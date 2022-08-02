package com.codecool.pyp.controller;

import com.codecool.pyp.model.Plant;
import com.codecool.pyp.service.PlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlantController {

    @Autowired
    private PlantService plantService;

    @GetMapping("/api/plants")
    private List<Plant> getAllPlants(){
        return plantService.getAllPlants();
    }

    @GetMapping("/api/plants/{id}")
    private Plant getPlant(@PathVariable ("id") Long id){
        return plantService.getPlant(id);
    }

    @DeleteMapping("/api/plants/{id}")
    private void deletePlant(@PathVariable ("id") Long id){
        plantService.deletePlant(id);
    }

    @PostMapping("/api/plants")
    private void addPlant(@RequestBody Plant plant){
        plantService.addOrUpdatePlant(plant);
    }

    @PutMapping("api/plants")
    private void updatePlant(@RequestBody Plant plant){
        plantService.addOrUpdatePlant(plant);
    }
}
