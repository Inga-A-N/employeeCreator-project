package io.employeeproject.employeeprojectbackend.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.employeeproject.employeeprojectbackend.exception.NotFoundException;
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
    
    //Get all
    
    @GetMapping
    public ResponseEntity<List<Employee>> getAll(){
	List<Employee> allEmployees = this.employeeService.findAll();
	return new ResponseEntity<>(allEmployees, HttpStatus.OK);
    }
    
    // Get by ID
    
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getById(@PathVariable Long id){
	Optional<Employee> foundEmployee = this.employeeService.findById(id);
	if(foundEmployee.isEmpty()) {
	    throw new NotFoundException(String.format("Employee with id: %s not found", id));
	}
	return new ResponseEntity<>(foundEmployee.get(), HttpStatus.OK);
    }
    
    
//    DELETE
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteByID(@PathVariable Long id) {
	boolean deletedEmployee = this.employeeService.deleteById(id);
	
	if(!deletedEmployee) {
	    throw new NotFoundException(String.format("Employee with id: %s not found, could not delete.", id));
	}
	return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }
    
//    UPDATE
    
    @PatchMapping("/{id}")
    public void updateById(@PathVariable Long id, @Valid @RequestBody UpdateEmployeeDTO data){
	System.out.println(data.firstName);
    }

}
