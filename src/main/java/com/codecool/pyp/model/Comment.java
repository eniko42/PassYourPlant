package com.codecool.pyp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Comment {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @JsonProperty("plant_id")
    @Column(name = "plant_id")
    private int plantId;
    @Column
    private String message;
    @JsonProperty("user_name")
    @Column(name = "user_name")
    private String userName;
    @JsonProperty("time_stamp")
    @Column(name = "time_stamp")
    private LocalDate timeStamp;

    public int getId() {
        return id;
    }

    public int getPlantId() {
        return plantId;
    }

    public String getMessage() {
        return message;
    }

    public String getUserName() {
        return userName;
    }

    public LocalDate getTimeStamp() {
        return timeStamp;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setUserName(String username) {
        this.userName = username;
    }

    public void setPlantId(int plantId) {
        this.plantId = plantId;
    }
}
