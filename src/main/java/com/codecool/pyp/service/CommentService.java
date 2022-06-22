package com.codecool.pyp.service;

import com.codecool.pyp.model.Comment;
import com.codecool.pyp.storage.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getComments(String id) {
        List<Comment> comments = new ArrayList<>();
        comments.addAll(StreamSupport.stream(commentRepository.findAll().spliterator(), false)
                .filter(comment -> comment.getPlantId().equals(UUID.fromString(id))).toList());
        return comments;
    }

    public void addOrUpdateComment(Comment comment, String plantId) {
        comment.setPlantId(UUID.fromString(plantId));
        commentRepository.save(comment);
    }


    public void deleteComment(Comment comment, String plantId) {
        comment.setPlantId(UUID.fromString(plantId));
        commentRepository.delete(comment);
    }
}
