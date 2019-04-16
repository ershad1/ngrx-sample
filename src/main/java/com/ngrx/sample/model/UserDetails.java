package com.ngrx.sample.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class UserDetails {
    @Id
    @GeneratedValue
    private Integer userId;
    private String username;
    private String firstName;
    private String lastName;
    private String gender;
    private Integer status;
}
