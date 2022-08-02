package com.codecool.pyp.service;

import com.codecool.pyp.model.Plant;
import com.codecool.pyp.storage.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlantService {

    @Autowired
    PlantRepository plantRepository;

    public List<Plant> getAllPlants() {
        return plantRepository.findAll();
    }

    public Plant getPlant(Long id) {
        return plantRepository.findById(id).isPresent()
                ? plantRepository.findById(id).get() : null;
    }

    public void deletePlant(Long id) {
        plantRepository.deleteById(id);
    }

    public void addOrUpdatePlant(Plant plant) {
        plantRepository.save(plant);
    }
}
