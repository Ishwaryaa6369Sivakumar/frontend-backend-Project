package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Supplier;
import com.example.demo.Repository.SupplierRepository;

import java.util.List;

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Supplier getSupplierById(Long supplierId) {
        return supplierRepository.findById(supplierId).orElseThrow(() -> new RuntimeException("Supplier not found"));
    }

    public Supplier addSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public Supplier updateSupplier(Long supplierId, Supplier supplierDetails) {
        Supplier supplier = supplierRepository.findById(supplierId).orElseThrow(() -> new RuntimeException("Supplier not found"));
        supplier.setSupplierName(supplierDetails.getSupplierName());
        supplier.setSupplierEmail(supplierDetails.getSupplierEmail());
        supplier.setSupplierPassword(supplierDetails.getSupplierPassword());
        supplier.setSupplierAddress(supplierDetails.getSupplierAddress());
        return supplierRepository.save(supplier);
    }

    public void deleteSupplier(Long supplierId) {
        supplierRepository.deleteById(supplierId);
    }
}
