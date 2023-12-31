package io.employeeproject.employeeprojectbackend.employee;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "employees")



public class Employee {
    
    public enum ContractType {
	    Contract,
	    Permanent
	}
    
    public enum WorkBasis {
	    Part_time,
	    Full_time
	}
    
    
//    Adding primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;
    
    @Column
    @Getter
    @Setter
    private String firstName;
    
    @Column
    @Getter
    @Setter
    private String middleName;
    
    @Column
    @Getter
    @Setter
    private String lastName;
    
    @Column
    @Getter
    @Setter
    private String email;
    
    @Column
    @Getter
    @Setter
    private String phoneNumber;
    
    @Column
    @Getter
    @Setter
    private String address;
    
    @Column
    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    private ContractType contractType;
    
    @Column
    @Getter
    @Setter
    private Date startDate;
    
    @Column
    @Getter
    @Setter
    private Date finishDate;
    
    @Column
    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    private WorkBasis workBasis;
    
    @Column
    @Getter
    @Setter
    private Float hoursPerWeek;
    
    public Employee() {};
    
    public Employee(String firstName,String middleName, String lastName,
	    String email, String phoneNumber, String address,
	    ContractType contractType, Date startDate, Date finishDate,
	    WorkBasis workBasis, Float hoursPerWeek) {
	super();
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
    };
    
    

}
