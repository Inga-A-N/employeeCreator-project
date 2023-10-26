package io.employeeproject.employeeprojectbackend.employee;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.employeeproject.employeeprojectbackend.employee.Employee.ContractType;
import io.employeeproject.employeeprojectbackend.employee.Employee.WorkBasis;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository;
    
    public Employee create(CreateEmployeeDTO data) {
//	clean up data
	String employeeFirstName = data.getFirstName().trim();
	String employeeMiddleName; 
	if(data.getMiddleName() != "null") {
		employeeMiddleName = data.getMiddleName().trim();
	}else {employeeMiddleName = data.getMiddleName();}
	String employeeLastName = data.getLastName().trim();
	String employeeAddress = data.getAddress().trim();
	String employeePhoneNumber = data.getPhoneNumber().trim();
	String employeeEmail = data.getEmail().trim();
	ContractType employeeContractType = data.getContractType();
	Date employeeStartDate = data.getStartDate();
	Date employeeFinishDate = data.getFinishDate();
	WorkBasis employeeWorkBasis = data.getWorkBasis();
	Float employeeHoursPerWeek = data.getHoursPerWeek();
	
	Employee newEmployee = new Employee(employeeFirstName,employeeMiddleName, employeeLastName,
		employeeEmail, employeePhoneNumber, employeeAddress,
		employeeContractType, employeeStartDate, employeeFinishDate,
		employeeWorkBasis, employeeHoursPerWeek);
	
	Employee createdEmployee = this.employeeRepository.save(newEmployee);
	
	return createdEmployee;
    }
    
    public List<Employee> findAll(){
	return this.employeeRepository.findAll();
    }
    
    public Optional<Employee> findById(Long id){
	Optional<Employee> optionalEmployee = this.employeeRepository.findById(id);
	return optionalEmployee;
    }
    
    public boolean deleteById(long id) {
	Optional<Employee> optionalEmployee = this.findById(id);
	
	if(optionalEmployee.isEmpty()) {
	    return false;
	}
	
	this.employeeRepository.delete(optionalEmployee.get());
	return true;
    }

}
