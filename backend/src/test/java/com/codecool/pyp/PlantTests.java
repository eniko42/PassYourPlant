package com.codecool.pyp;

import com.codecool.pyp.model.Plant;
import com.codecool.pyp.service.PlantService;
import com.codecool.pyp.repository.PlantRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;



@SpringBootTest
@AutoConfigureTestDatabase
class PlantTests {

    private final PlantRepository plantRepository;
    private final PlantService plantService;
    private Plant plant;

    @Autowired
    public PlantTests(PlantRepository plantRepository, PlantService plantService) {
        this.plantRepository = plantRepository;
        this.plantService = plantService;
    }

    @BeforeEach
    void setUp() {
        this.plant = Plant.builder()
                .userName("Dia")
                .plantName("Rose")
                .description("Nice plant")
                .photo("sunflower.jpg")
                .location("Budapest")
                .contact("123")
                .build();
    }

    /*@Test
    void addOrUpdatePlantTest() {
        plantService.addOrUpdatePlant(plant);
        Assertions.assertTrue(plantRepository.findById(1L).isPresent());
    }*/

    @Test
    void getAllPlantTest() {
        plantRepository.save(plant);
        Assertions.assertFalse(plantService.getAllPlants().isEmpty());
    }

    /*@Test
    void getPlantTest() {
        plantRepository.save(plant);
        Assertions.assertEquals(plantService.getPlant(plant.getId()), plant);
    }*/

    @Test
    void deletePlantTest() {
        plantRepository.save(plant);
        plantService.deletePlant(plant.getId());
        Assertions.assertTrue(plantRepository.findAll().isEmpty());
    }
}
