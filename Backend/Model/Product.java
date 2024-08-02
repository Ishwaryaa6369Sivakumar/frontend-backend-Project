package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private String productName;
    private String productquality;
    private String productquantity;
    private String productAmount;
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
    public Product(Long productId, String productName, String productquality, String productquantity,
            String productAmount) {
        this.productId = productId;
        this.productName = productName;
        this.productquality = productquality;
        this.productquantity = productquantity;
        this.productAmount = productAmount;
    }
    public Product() {
    }
    
    }

