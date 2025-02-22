package com.employees.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    // Show Login Page
    @GetMapping("/login")
    public String loginPage() {
        return "login"; // This will serve login.html from the templates folder
    }

    // Show Registration Page
    @GetMapping("/register")
    public String registerPage() {
        return "register"; // This will serve register.html from the templates folder
    }
}
