package com.codecool.pyp.controller;

import com.codecool.pyp.model.Comment;
import com.codecool.pyp.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
public class CommentController {


    private final CommentService commentService;

    @Autowired
    public CommentController (CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("api/plant/comments")
    private List<Comment> getAllComments(){
        return commentService.getAllComments();
    }

    @GetMapping("/api/plants/{plant-id}/comments")
    private Set<Comment> getComments(@PathVariable("plant-id") Long plantId) {
        return commentService.getComments(plantId);
    }

    @PostMapping("/api/plants/{plant-id}/comments")
    private void addComment(@RequestBody Comment comment, @PathVariable("plant-id") Long plantId) {
        commentService.addOrUpdateComment(comment, plantId);
    }

    @PutMapping("/api/plants/{plant-id}/comments")
    private void updateComment(@RequestBody Comment comment, @PathVariable("plant-id") Long plantId) {
        commentService.addOrUpdateComment(comment, plantId);
    }

    @DeleteMapping("api/comments/delete-all")
    private void deleteAllComments(){
        commentService.deleteAll();
    }

    @DeleteMapping("/api/plants/{plant-id}/comments")
    private void deleteComment(@RequestBody Comment comment, @PathVariable("plant-id") Long plantId) {
        commentService.deleteComment(comment, plantId);
    }
}
