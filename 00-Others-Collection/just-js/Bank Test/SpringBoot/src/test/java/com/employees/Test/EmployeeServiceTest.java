package com.employees.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.employees.handler.ResourceNotFoundException;
import com.employees.model.Employees;
import com.employees.repository.EmployeesRepository;
import com.employees.service.EmployeeServiceImpl;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

    @Mock
    private EmployeesRepository repository;

    @InjectMocks
    private EmployeeServiceImpl service;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSaveEmployee() {
        Employees employee = new Employees(null, "John ", "Doe", "john@example.com", "Developer", "5000");
        Employees savedEmployee = new Employees(1L, "John ", "Doe", "john@example.com", "Developer", "5000");

        when(repository.save(employee)).thenReturn(savedEmployee);

        Employees result = service.createEmployee(employee);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        verify(repository, times(1)).save(employee);
    }

    @Test
    void testGetAllEmployees() {
        List<Employees> employees = Arrays.asList(
                new Employees(1L, "John", "Doe", "john@example.com", "Developer", "5000"),
                new Employees(2L, "Jane Smith", "Doe", "jane@example.com", "Manager", "7000"));

        when(repository.findAll()).thenReturn(employees);

        List<Employees> result = service.getAllEmployees();

        assertEquals(2, result.size());
        assertEquals("John", result.get(0).getFirstName());
        verify(repository, times(1)).findAll();
    }

    @Test
    void testGetEmployeeById() {
        Employees employee = new Employees(1L, "John", "Doe", "john@example.com", "Developer", "5000");
        when(repository.findById(1L)).thenReturn(Optional.of(employee));

        Employees result = service.getEmployeeById(1L);

        assertNotNull(result);
        assertEquals("John", result.getFirstName());
        verify(repository, times(1)).findById(1L);
    }

    @Test
    void testUpdateEmployee() {
        Employees existingEmployee = new Employees(1L, "John", "Doe", "john@example.com", "Developer", "5000");
        Employees updatedEmployee = new Employees(1L, "John Updated", "Doe Updated", "john.updated@example.com",
                "Senior Developer", "6000");

        when(repository.findById(1L)).thenReturn(Optional.of(existingEmployee));
        when(repository.save(existingEmployee)).thenReturn(updatedEmployee);

        Employees result = service.updateEmployee(1L, updatedEmployee);

        assertEquals("John Updated", result.getFirstName());
        assertEquals("Doe Updated", result.getLastName());
        assertEquals("6000", result.getSalary());
        verify(repository, times(1)).findById(1L);
        verify(repository, times(1)).save(existingEmployee);
    }

    @Test
    void testDeleteEmployee() {
        // Arrange
        Employees employee = new Employees(1L, "John", "Doe", "john@example.com", "Developer", "5000");
        when(repository.findById(1L)).thenReturn(Optional.of(employee));

        // Act
        service.deleteEmployee(1L);

        // Assert
        verify(repository, times(1)).findById(1L);
        verify(repository, times(1)).delete(employee); // Verify delete(Employee)
    }

    @Test
    void testDeleteEmployeeNotFound() {
        Long employeeId = 1L;

        // Mock repository behavior for non-existing employee
        Mockito.when(repository.findById(employeeId)).thenReturn(Optional.empty());

        // Assert that ResourceNotFoundException is thrown
        Assertions.assertThrows(ResourceNotFoundException.class, () -> service.deleteEmployee(employeeId));

        // Verify interactions
        Mockito.verify(repository, Mockito.times(1)).findById(employeeId);
        Mockito.verify(repository, Mockito.never()).delete(Mockito.any());
    }
}
