package io.employeeproject.employeeprojectbackend.employee;

import java.util.Date;

import io.employeeproject.employeeprojectbackend.employee.Employee.ContractType;
import io.employeeproject.employeeprojectbackend.employee.Employee.WorkBasis;
import jakarta.validation.constraints.Email;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


public class UpdateEmployeeDTO {
    
//    @Size(min = 1)
    @Pattern(regexp = "^(?=\\S).*$", message="First name cannot be an empty string")
    String firstName;
     
    
    String middleName;
    
    @Pattern(regexp = "^(?=\\S).*$", message="Last name cannot be an empty string")
    String lastName;
      
    @Email(message = "Please provide a valid email address")
    String email;
    

    @Size(min = 8)
    @Pattern(regexp = "(^([0-9]|\\+|\\(|\\))*$)", message = "Phone number cannot contain any character, except numbers, + or ().")
    String phoneNumber;
        
    @Pattern(regexp = "^(?=\\S).*$", message="Address cannot be an empty string")
    String address;
    
    ContractType contractType;
        
    Date startDate;
        
    Date finishDate;
        
    WorkBasis workBasis;
        
    Float hoursPerWeek;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public ContractType getContractType() {
        return contractType;
    }

    public void setContractType(ContractType contractType) {
        this.contractType = contractType;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public WorkBasis getWorkBasis() {
        return workBasis;
    }

    public void setWorkBasis(WorkBasis workBasis) {
        this.workBasis = workBasis;
    }

    public Float getHoursPerWeek() {
        return hoursPerWeek;
    }

    public void setHoursPerWeek(Float hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }

}
