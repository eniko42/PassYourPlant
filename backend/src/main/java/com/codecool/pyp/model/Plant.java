package com.codecool.pyp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
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

}
