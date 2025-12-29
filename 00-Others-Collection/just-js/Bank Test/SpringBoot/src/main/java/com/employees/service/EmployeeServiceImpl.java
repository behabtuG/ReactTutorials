package com.employees.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.employees.handler.ResourceNotFoundException;
import com.employees.model.Employees;
import com.employees.repository.EmployeesRepository;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeesService {

    @Autowired
    private EmployeesRepository employeeRepository;

    @Override
    public List<Employees> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employees getEmployeeById(Long id) throws ResourceNotFoundException {
        @SuppressWarnings("null")
        Optional<Employees> employee = employeeRepository.findById(id);
        return employee.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + id));
    }

    @SuppressWarnings("null")
    @Override
    public Employees createEmployee(Employees employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employees updateEmployee(Long id, Employees updatedEmployeeDetails) throws ResourceNotFoundException {
        Employees employee = getEmployeeById(id);
        employee.setFirstName(updatedEmployeeDetails.getFirstName());
        employee.setLastName(updatedEmployeeDetails.getLastName());
        employee.setRole(updatedEmployeeDetails.getRole());
        employee.setEmail(updatedEmployeeDetails.getEmail());
        employee.setSalary(updatedEmployeeDetails.getSalary());
        return employeeRepository.save(employee);
    }

    @SuppressWarnings("null")
    @Override
    public void deleteEmployee(Long id) {
        Employees employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + id));
        employeeRepository.delete(employee);
    }

}