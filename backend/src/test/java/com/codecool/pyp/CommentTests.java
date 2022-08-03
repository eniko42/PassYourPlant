package com.codecool.pyp;

import com.codecool.pyp.model.Comment;
import com.codecool.pyp.model.Plant;
import com.codecool.pyp.service.CommentService;
import com.codecool.pyp.storage.CommentRepository;
import com.codecool.pyp.storage.PlantRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;


import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@SpringBootTest
@AutoConfigureTestDatabase
public class CommentTests {

    private final CommentRepository commentRepository;
    private final PlantRepository plantRepository;
    private final CommentService commentService;
    private Plant plant;
    private Comment comment;


    @Autowired
    public CommentTests(CommentRepository commentRepository, PlantRepository plantRepository,
                        CommentService commentService) {
        this.commentRepository = commentRepository;
        this.plantRepository = plantRepository;
        this.commentService = commentService;
    }

    @BeforeEach
    public void setup(){
        this.plant = new Plant();
        plant.setUserName("Dia");
        plant.setPlantName("Rose");
        plant.setDescription("Nice plant");
        plant.setPhoto("rose.jpg");
        plant.setLocation("Budapest");
        plant.setContact("1234");
        plantRepository.save(plant);

        this.comment = Comment.builder()
                .message("My first comment")
                .plant(plant)
                .timeStamp(LocalDate.now())
                .userName("Dia")
                .build();
        commentRepository.save(comment);
    }

    @Test
    public void addCommentTest(){
        commentService.addOrUpdateComment(comment, plant.getId());
        Assertions.assertTrue(commentRepository.findById(comment.getId()).isPresent());
    }

    @Test
    public void getPlantByIdTest(){
        Assertions.assertEquals(plant, commentService.getPlantById(plant.getId()));
    }
}
