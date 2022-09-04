package com.codecool.pyp.service;

import com.codecool.pyp.model.Comment;
import com.codecool.pyp.model.Plant;
import com.codecool.pyp.repository.CommentRepository;
import com.codecool.pyp.repository.PlantRepository;
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

    public Set<Comment> getCommentsByPlantId(Long plantId) {
        Plant plant = getPlantById(plantId);
        return plant.getComments();
    }

    public Plant getPlantById(Long plantId) {
        return plantRepository.findById(plantId).orElseThrow(()-> new NoSuchElementException("Not find plant with given id: " + plantId));
    }

    public void addOrUpdateComment(Comment comment, Long plantId) {
        LocalDate localDate = LocalDate.now();
        comment.setTimeStamp(localDate);
        comment.setPlant(getPlantById(plantId));
        commentRepository.save(comment);
    }


    public void deleteComment(Long commentId) {
        Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new NoSuchElementException("There is no comment with given id: " + commentId));
        commentRepository.delete(comment);
    }

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public void deleteAll() {
        commentRepository.deleteAll();
    }
}
