package com.codecool.pyp.service;

import com.codecool.pyp.model.Comment;
import com.codecool.pyp.storage.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getComments(String id) {
        List<Comment> comments = new ArrayList<>();
        comments.addAll(StreamSupport.stream(commentRepository.findAll().spliterator(), false)
                .filter(comment -> comment.getPlantId() == Integer.parseInt(id)).toList());
        return comments;
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
