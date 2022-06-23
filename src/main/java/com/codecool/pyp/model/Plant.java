package com.codecool.pyp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Plant {

    @Id
    @Column
    private int id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "plant_name")
    private String plantName;
    @Column
    private String description;
    @Column
    private String photo;
    @Column
    private String location;
    @Column
    private String contact;
    @Column
    private boolean available;

    public int getId() {
        return id;
    }


    public String getDescription() {
        return description;
    }

    public String getPhoto() {
        return photo;
    }

    public String getLocation() {
        return location;
    }

    public String getContact() {
        return contact;
    }

    public boolean isAvailable() {
        return available;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPlantName() {
        return plantName;
    }

    public void setPlantName(String plantName) {
        this.plantName = plantName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}
