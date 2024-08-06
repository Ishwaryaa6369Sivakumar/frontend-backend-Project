

package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Product {

    @Id
    private Long productId;
    private String productName;
    private String productquality;
    private String productquantity;
    private String productAmount;

    @ManyToOne
    @JsonBackReference
    private Supplier supplier;

    public Product() {
    }

    public Product(Long productId, String productName, String productquality, String productquantity,
                   String productAmount, Supplier supplier) {
        this.productId = productId;
        this.productName = productName;
        this.productquality = productquality;
        this.productquantity = productquantity;
        this.productAmount = productAmount;
        this.supplier = supplier;
    }

    // Getters and Setters
    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductquality() {
        return productquality;
    }

    public void setProductquality(String productquality) {
        this.productquality = productquality;
    }

    public String getProductquantity() {
        return productquantity;
    }

    public void setProductquantity(String productquantity) {
        this.productquantity = productquantity;
    }

    public String getProductAmount() {
        return productAmount;
    }

    public void setProductAmount(String productAmount) {
        this.productAmount = productAmount;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }
}
