package com.codecool.pyp.model;

import javax.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter
@Setter
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String password;

    private String email;

    private String introduction;

    @OneToMany
    private Set<Plant> plants;

    @OneToMany
    private Set<Comment> comments;
}
