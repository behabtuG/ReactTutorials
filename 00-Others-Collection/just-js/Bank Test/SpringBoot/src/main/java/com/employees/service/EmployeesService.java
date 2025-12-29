package com.employees.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employees.model.Employees;

//?Service interface for Employee operations
@Service
public interface EmployeesService {

    List<Employees> getAllEmployees();

    Employees getEmployeeById(Long id);

    Employees createEmployee(Employees employee);

    Employees updateEmployee(Long id, Employees updatedEmployeeDetails);

    void deleteEmployee(Long id);

}