package com.codecool.pyp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table
public class Comment {
    @Id
    @Column
    private int id;
    @Column(name = "plant_id")
    private int plantId;
    @Column
    private String message;
    @Column(name = "user_name")
    private String userName;
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
