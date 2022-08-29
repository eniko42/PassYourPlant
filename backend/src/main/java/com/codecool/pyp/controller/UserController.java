package com.codecool.pyp.controller;

import com.codecool.pyp.exception.UserNameExistsException;
import com.codecool.pyp.model.User;
import com.codecool.pyp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/registration")
    public void register(@RequestBody User user){
        try {
            userService.addUser(user);
        } catch (UserNameExistsException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_ACCEPTABLE,
                    e.getLocalizedMessage(), e);
        }
    }
}
