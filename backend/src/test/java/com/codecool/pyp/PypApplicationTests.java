package com.codecool.pyp;

import com.codecool.pyp.model.Plant;
import com.codecool.pyp.storage.PlantRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.*;


@DataJpaTest
class PypApplicationTests {

	private final PlantRepository plantRepository;

	@Autowired
	public PypApplicationTests(PlantRepository plantRepository) {
		this.plantRepository = plantRepository;
	}

	@BeforeEach
	void setUp() {
		Plant plant = new Plant();
		plant.setUserName("Dia");
		plant.setPlantName("Rose");
		plant.setDescription("Nice plant");
		plant.setPhoto("rose.jpg");
		plant.setLocation("Budapest");
		plant.setContact("1234");
		plantRepository.save(plant);
	}

	@Test
	void getPlantByIDTest() {
		assertTrue(plantRepository.findById(1L).isPresent());
	}

}
