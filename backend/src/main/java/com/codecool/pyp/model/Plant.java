package com.codecool.pyp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @JsonProperty("user_name")
    @Column(name = "user_name")
    private String userName;

    @JsonProperty("plant_name")
    @Column(name = "plant_name")
    private String plantName;

    private String description;

    private String photo;

    private String location;

    private String contact;

    private boolean available;

    @OneToMany(mappedBy = "plant")
    private Set<Comment> comments = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Plant plant = (Plant) o;
        return available == plant.available && Objects.equals(id, plant.id) && Objects.equals(userName, plant.userName) && Objects.equals(plantName, plant.plantName) && Objects.equals(description, plant.description) && Objects.equals(photo, plant.photo) && Objects.equals(location, plant.location) && Objects.equals(contact, plant.contact);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, plantName, description, photo, location, contact, available, comments);
    }
}
