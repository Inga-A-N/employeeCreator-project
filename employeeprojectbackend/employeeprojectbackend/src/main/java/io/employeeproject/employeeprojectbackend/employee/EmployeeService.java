package io.employeeproject.employeeprojectbackend.employee;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository;
    
    public Employee create(CreateEmployeeDTO data) {
//	clean up data
	String employeeFirstName = data.getFirstName().trim();
//	if(data.getMiddleName() != "null") {
//	String employeeMiddleName = data.getMiddleName().trim();
//		}else{
	String employeeMiddleName = data.getMiddleName(); 
//		};
	String employeeLastName = data.getLastName().trim();
	String employeeAddress = data.getAddress().trim();
	String employeePhoneNumber = data.getPhoneNumber().trim();
	String employeeEmail = data.getEmail().trim();
	String employeeContractType = data.getContractType();
	Date employeeStartDate = data.getStartDate();
	Date employeeFinishDate = data.getFinishDate();
	String employeeWorkBasis = data.getWorkBasis();
	Long employeeHoursPerWeek = data.getHoursPerWeek();
	
	Employee newEmployee = new Employee(employeeFirstName,employeeMiddleName, employeeLastName,
		employeeEmail, employeePhoneNumber, employeeAddress,
		employeeContractType, employeeStartDate, employeeFinishDate,
		employeeWorkBasis, employeeHoursPerWeek);
	
	Employee createdEmployee = this.employeeRepository.save(newEmployee);
	
	return createdEmployee;
    }

}
