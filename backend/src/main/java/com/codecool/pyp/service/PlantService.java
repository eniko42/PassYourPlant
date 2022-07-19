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
        List<Plant> plants = new ArrayList<>();
        plantRepository.findAll().forEach(plants::add);
        return plants;
    }

    public Plant getPlant(int id) {
        return plantRepository.findById(id).isPresent()
                ? plantRepository.findById(id).get() : null;
    }

    public void deletePlant(int id) {
        plantRepository.deleteById(id);
    }

    public void addOrUpdatePlant(Plant plant) {
        plantRepository.save(plant);
    }
}
