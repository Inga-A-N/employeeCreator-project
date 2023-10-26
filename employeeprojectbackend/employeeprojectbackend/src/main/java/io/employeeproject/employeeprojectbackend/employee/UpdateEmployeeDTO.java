package io.employeeproject.employeeprojectbackend.employee;

import java.util.Date;

import io.employeeproject.employeeprojectbackend.employee.Employee.ContractType;
import io.employeeproject.employeeprojectbackend.employee.Employee.WorkBasis;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

public class UpdateEmployeeDTO {
    
    @Size(min = 1)
    @Pattern(regexp = "^(?=\\S).*$", message="Title cannot be an empty string")
    String firstName;
    
    
    String middleName;
    
    
    String lastName;
    
    
    @Email(message = "Please provide a valid email address")
    String email;
    
    
    String phoneNumber;
    
    
    String address;
    

    ContractType contractType;
    
    
    Date startDate;
    
    
    Date finishDate;
    
    
    WorkBasis workBasis;
    
    
    Float hoursPerWeek;

}
