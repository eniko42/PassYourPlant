package com.codecool.pyp.controller;

import com.codecool.pyp.model.Comment;
import com.codecool.pyp.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/api/plants/{id}/comments")
    private List<Comment> getComments(@PathVariable String id) {
        return commentService.getComments(id);
    }

    @PostMapping("/api/plants/{id}/comments")
    private void addComment(@RequestBody Comment comment, @PathVariable String id) {
        commentService.addOrUpdateComment(comment, id);
    }

    @PutMapping("/api/plants/{id}/comments")
    private void updateComment(@RequestBody Comment comment, @PathVariable String id) {
        commentService.addOrUpdateComment(comment, id);
    }

    @DeleteMapping("/api/plants/{id}/comments")
    private void deleteComment(@RequestBody Comment comment, @PathVariable String id) {
        commentService.deleteComment(comment, id);
    }
}
