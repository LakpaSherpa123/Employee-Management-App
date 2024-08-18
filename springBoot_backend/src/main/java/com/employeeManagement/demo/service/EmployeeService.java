package com.employeeManagement.demo.service;

import com.employeeManagement.demo.entity.Employee;
import com.employeeManagement.demo.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;



@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Transactional
    public Employee postEmployee(Employee employee) {

        System.out.println("Employee Added "+ employeeRepository.save(employee));

       return employeeRepository.save(employee);
    }
}
