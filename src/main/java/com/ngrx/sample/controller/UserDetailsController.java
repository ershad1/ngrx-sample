package com.ngrx.sample.controller;

import com.ngrx.sample.model.UserDetails;
import com.ngrx.sample.repository.UserDetailsRepository;
import com.ngrx.sample.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/userDetails")
public class UserDetailsController {
    @Autowired
    UserDetailsService userDetailsService;
    @GetMapping
    public Page<UserDetails> getAllUsers(Pageable pageable) {

        return userDetailsService.getAllUsers(pageable);
    }
}
