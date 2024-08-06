package com.example.demo.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin/default")
@RequiredArgsConstructor
public class AdController {

    private final AuthService authService;

    @PostMapping
    public ResponseEntity<?> createAdmin() {
        try {
            return new ResponseEntity<>(authService.createAdmin(), HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
