package com.codecool.pyp.model;

import java.nio.file.Path;
import java.util.UUID;

public class Plant {

    private UUID plantId;
    private String name;
    private String description;
    private Path photo;
    private String location;
    private String contact;
    private boolean available;

    public UUID getPlantId() {
        return plantId;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Path getPhoto() {
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

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPhoto(Path photo) {
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
