package com.employees.handler;

//?Custom Exception for Resource Not Found scenarios
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
