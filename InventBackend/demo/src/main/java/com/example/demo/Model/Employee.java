package com.example.demo.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Employee {

    @Id
    private String employeeId;
    private String employeeName;
    private String employeeEmail;
    private String employeePassword;
    private String employeeAddress;
    private String employeePhone;
    public Employee() {
    }
    public Employee(String employeeId, String employeeName, String employeeEmail, String employeePassword,
            String employeeAddress, String employeePhone) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this.employeePassword = employeePassword;
        this.employeeAddress = employeeAddress;
        this.employeePhone = employeePhone;
    }
    public String getEmployeeId() {
        return employeeId;
    }
    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }
    public String getEmployeeName() {
        return employeeName;
    }
    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }
    public String getEmployeeEmail() {
        return employeeEmail;
    }
    public void setEmployeeEmail(String employeeEmail) {
        this.employeeEmail = employeeEmail;
    }
    public String getEmployeePassword() {
        return employeePassword;
    }
    public void setEmployeePassword(String employeePassword) {
        this.employeePassword = employeePassword;
    }
    public String getEmployeeAddress() {
        return employeeAddress;
    }
    public void setEmployeeAddress(String employeeAddress) {
        this.employeeAddress = employeeAddress;
    }
    public String getEmployeePhone() {
        return employeePhone;
    }
    public void setEmployeePhone(String employeePhone) {
        this.employeePhone = employeePhone;
    }

}

