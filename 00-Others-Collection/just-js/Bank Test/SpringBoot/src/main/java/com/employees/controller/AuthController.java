package com.employees.controller;

import com.employees.model.Employees;
import com.employees.repository.EmployeesRepository;
import com.employees.security.JwtTokenProvider;

import jakarta.validation.Valid;

import com.employees.payload.ApiResponse;
import com.employees.payload.JwtAuthenticationResponse;
import com.employees.payload.LoginRequest;
import com.employees.payload.SignUpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

//?Controller for Authentication APIs (SignIn and SignUp)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private EmployeesRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // SignIn (Login) API
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()));

        // Set authentication context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generate JWT token
        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    // SignUp (Register) API
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if (employeeRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Create new employee account
        Employees employee = new Employees(null, signUpRequest.getfirstName(), signUpRequest.getlastName(),
                signUpRequest.getEmail(),
                signUpRequest.getPassword(), null);
        employee.setPassword(passwordEncoder.encode(employee.getPassword()));

        // Save the employee to the database
        Employees result = employeeRepository.save(employee);

        // Generate URI for created employee
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/employees/{email}")
                .buildAndExpand(result.getEmail()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Employee registered successfully"));
    }
}
