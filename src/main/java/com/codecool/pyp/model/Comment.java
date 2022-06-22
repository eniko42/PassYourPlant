package com.codecool.pyp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table
public class Comment {
    @Id
    @Column
    private UUID id;
    @Column
    private UUID plantId;
    @Column
    private String message;
    @Column
    private String username;
    @Column
    private LocalDate timeStamp;

    public UUID getId() {
        return id;
    }

    public UUID getPlantId() {
        return plantId;
    }

    public String getMessage() {
        return message;
    }

    public String getUsername() {
        return username;
    }

    public LocalDate getTimeStamp() {
        return timeStamp;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPlantId(UUID plantId) {
        this.plantId = plantId;
    }
}
