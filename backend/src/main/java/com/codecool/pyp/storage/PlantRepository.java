package com.codecool.pyp.storage;

import com.codecool.pyp.model.Plant;
import org.springframework.data.repository.CrudRepository;

public interface PlantRepository extends CrudRepository<Plant, Integer> {
}
