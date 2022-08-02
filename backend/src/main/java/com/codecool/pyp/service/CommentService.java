package com.codecool.pyp.service;

import com.codecool.pyp.model.Comment;
import com.codecool.pyp.model.Plant;
import com.codecool.pyp.storage.CommentRepository;
import com.codecool.pyp.storage.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

@Service
public class CommentService {


    private final CommentRepository commentRepository;
    private final PlantRepository plantRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository, PlantRepository plantRepository) {
        this.commentRepository = commentRepository;
        this.plantRepository = plantRepository;
    }

    public Set<Comment> getComments(Long plantId) {
        Plant plant = plantRepository.findById(plantId).orElseThrow(()-> new NoSuchElementException("Not find plant with given id: " + plantId));
        return plant.getComments();
    }

    public void addOrUpdateComment(Comment comment, String plantId) {
        LocalDate localDate = LocalDate.now();
        comment.setTimestamp(localDate);
        comment.setPlantId(Integer.parseInt(plantId));
        commentRepository.save(comment);
    }


    public void deleteComment(Comment comment, String plantId) {
        comment.setPlantId(Integer.parseInt(plantId));
        commentRepository.delete(comment);
    }
}
