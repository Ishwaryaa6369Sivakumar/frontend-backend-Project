package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Register;
import com.example.demo.Service.RegisterService;

@RestController
@RequestMapping("/api/registers")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    // Get all registers
    @GetMapping
    public List<Register> getAllRegisters() {
        return registerService.getAllRegisters();
    }

    // Get register by ID
    @GetMapping("/{id}")
    public ResponseEntity<Register> getRegisterById(@PathVariable Long id) {
        Optional<Register> register = registerService.getRegisterById(id);
        return register.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new register
    @PostMapping
    public Register createRegister(@RequestBody Register register) {
        return registerService.saveRegister(register);
    }

    // Update an existing register
    @PutMapping("/{id}")
    public ResponseEntity<Register> updateRegister(@PathVariable Long id, @RequestBody Register register) {
        if (!registerService.getRegisterById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        register.setId(id);
        Register updatedRegister = registerService.saveRegister(register);
        return ResponseEntity.ok(updatedRegister);
    }

    // Delete a register
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegister(@PathVariable Long id) {
        if (!registerService.getRegisterById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        registerService.deleteRegister(id);
        return ResponseEntity.noContent().build();
    }
}
