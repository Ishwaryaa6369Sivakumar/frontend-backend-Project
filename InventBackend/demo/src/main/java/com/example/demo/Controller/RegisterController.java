package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Register;
import com.example.demo.Service.RegisterService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class RegisterController {

    @Autowired
    private RegisterService userService;

    @GetMapping
    public List<Register> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Register> getUserById(@PathVariable Long id) {
        Optional<Register> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Register addUser(@RequestBody Register user) {
        return userService.addUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Register> updateUser(@PathVariable Long id, @RequestBody Register userDetails) {
        Register updatedUser = userService.updateUser(id, userDetails);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
