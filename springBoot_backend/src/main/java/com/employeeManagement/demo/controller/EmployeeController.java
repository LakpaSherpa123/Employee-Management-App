package com.employeeManagement.demo.controller;


import com.employeeManagement.demo.entity.Employee;
import com.employeeManagement.demo.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api")
public class EmployeeController {


    private final EmployeeService employeeService;


    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee employee) throws SQLException {

        System.out.println("Inside employee controller" + employee);
        return employeeService.postEmployee(employee);
    }

    @GetMapping("/test")
    public String status()
    {
        System.out.println("Successfully Connected");
        return("Success");
    }

}
