package com.employees.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employees.model.Employees;

//?Repository interface for Employees entity
@Repository
public interface EmployeesRepository extends JpaRepository<Employees, Long> {

    boolean existsByEmail(String email);

}
