package io.employeeproject.employeeprojectbackend.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;
    
//    CREATE
    
    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody CreateEmployeeDTO data){
	System.out.println(data.firstName);
	System.out.println(data.lastName);
	
	Employee createdEmployee = this.employeeService.create(data);
	return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);

    }
    
//    READ
    
    @GetMapping
    public ResponseEntity<List<Employee>> getAll(){
	List<Employee> allEmployees = this.employeeService.findAll();
	return new ResponseEntity<>(allEmployees, HttpStatus.OK);
    }

}
