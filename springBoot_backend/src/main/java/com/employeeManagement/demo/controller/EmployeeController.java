package com.employeeManagement.demo.controller;


import com.employeeManagement.demo.entity.Employee;
import com.employeeManagement.demo.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

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

    @GetMapping("/view-employees")
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id)
    {
        try {
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>("Employee with ID "+id + " deleted successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployee(@PathVariable Long id){
        try{
            Employee employee = employeeService.getEmployeeById(id);
            if(employee != null )
                return ResponseEntity.ok(employee);
            else
                return ResponseEntity.notFound().build();

        }catch(Exception e)
        {
            return ResponseEntity.ok(e.toString());
        }
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        Employee updatedEmployee = employeeService.updateEmployee(id, employee);

        if(updatedEmployee == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        return ResponseEntity.ok(updatedEmployee);
    }


}
