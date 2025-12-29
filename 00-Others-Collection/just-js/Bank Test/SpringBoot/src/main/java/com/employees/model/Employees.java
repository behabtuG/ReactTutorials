package com.employees.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data // ?Lambok annotation to generate getters, setters and constructors
public class Employees {

    public Employees() {
    }

    public Employees(Long l, String string, String string2, String string3, String string4, String string5) {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String role;
    private String salary;
}