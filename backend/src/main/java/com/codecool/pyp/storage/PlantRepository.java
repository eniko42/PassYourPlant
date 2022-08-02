package com.codecool.pyp.storage;

import com.codecool.pyp.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface PlantRepository extends JpaRepository<Plant, Long> {
}
