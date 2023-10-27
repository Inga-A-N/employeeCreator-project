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

public class CreateEmployeeDTO {
    @NotBlank
    @Getter
    @Setter
    String firstName;
    
    @Getter
    @Setter
    String middleName;
    
    @NotBlank
    @Getter
    @Setter
    String lastName;
    
    @NotBlank
    @Email(message = "Please provide a valid email address")
    @Getter
    @Setter
    String email;
    
//    @NotBlank
    @Size(min = 8)
    @Pattern(regexp = "([0-9]|\\+|\\(|\\))")
    @Getter
    @Setter
    String phoneNumber;
    
    @NotBlank
    @Getter
    @Setter
    String address;
    
//    @NotBlank
    @Getter
    @Setter
    ContractType contractType;
    
    @NotNull
    @Getter
    @Setter
    Date startDate;
    
    @Getter
    @Setter
    Date finishDate;
    
    
//    @NotBlank
    @Getter
    @Setter
    WorkBasis workBasis;
    
    @NotNull
    @Getter
    @Setter
    Float hoursPerWeek;
    
    public CreateEmployeeDTO(String firstName,String middleName, String lastName,
	    String email, String phoneNumber, String address,
	    ContractType contractType, Date startDate, Date finishDate,
	    WorkBasis workBasis, Float hoursPerWeek) {
	this.firstName = firstName;
	this.middleName = middleName;
	this.lastName = lastName;
	this.email = email;
	this.phoneNumber = phoneNumber;
	this.address = address;
	this.contractType = contractType;
	this.startDate = startDate;
	this.finishDate = finishDate;
	this.workBasis = workBasis;
	this.hoursPerWeek = hoursPerWeek;
    }

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
