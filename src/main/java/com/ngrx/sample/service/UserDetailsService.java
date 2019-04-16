package com.ngrx.sample.service;

import com.ngrx.sample.model.UserDetails;
import com.ngrx.sample.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsService {

    @Autowired
    UserDetailsRepository userDetailsRepository;

    public Page<UserDetails> getAllUsers(Pageable pageable) {
        return userDetailsRepository.findAll(pageable);
    }
}
