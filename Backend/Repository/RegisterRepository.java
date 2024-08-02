package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Register;

public interface RegisterRepository extends JpaRepository<Register, Long> {
}
