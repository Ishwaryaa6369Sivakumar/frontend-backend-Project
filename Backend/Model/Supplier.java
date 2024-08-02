package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplierId;
    private String supplierName;
    private String supplierEmail;
    private String supplierPassword;
    private String supplierAddress;
    public Supplier() {
    }
    public Supplier(Long supplierId, String supplierName, String supplierEmail, String supplierPassword,
            String supplierAddress) {
        this.supplierId = supplierId;
        this.supplierName = supplierName;
        this.supplierEmail = supplierEmail;
        this.supplierPassword = supplierPassword;
        this.supplierAddress = supplierAddress;
    }
    public Long getSupplierId() {
        return supplierId;
    }
    public void setSupplierId(Long supplierId) {
        this.supplierId = supplierId;
    }
    public String getSupplierName() {
        return supplierName;
    }
    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }
    public String getSupplierEmail() {
        return supplierEmail;
    }
    public void setSupplierEmail(String supplierEmail) {
        this.supplierEmail = supplierEmail;
    }
    public String getSupplierPassword() {
        return supplierPassword;
    }
    public void setSupplierPassword(String supplierPassword) {
        this.supplierPassword = supplierPassword;
    }
    public String getSupplierAddress() {
        return supplierAddress;
    }
    public void setSupplierAddress(String supplierAddress) {
        this.supplierAddress = supplierAddress;
    }
    
}
