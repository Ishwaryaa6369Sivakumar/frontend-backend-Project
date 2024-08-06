// package com.example.demo.Service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.Model.Register;
// import com.example.demo.Repository.RegisterRepository;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class RegisterService {

//     @Autowired
//     private RegisterRepository userRepository;

//     public List<Register> getAllUsers() {
//         return userRepository.findAll();
//     }

//     public Optional<Register> getUserById(Long id) {
//         return userRepository.findById(id);
//     }

//     public Register addUser(Register user) {
//         return userRepository.save(user);
//     }

//     public Register updateUser(Long id, Register userDetails) {
//         Optional<Register> user = userRepository.findById(id);
//         if (user.isPresent()) {
//             Register updatedUser = user.get();
//             updatedUser.setFullName(userDetails.getFullName());
//             updatedUser.setEmail(userDetails.getEmail());
//             updatedUser.setPhoneNumber(userDetails.getPhoneNumber());
//             updatedUser.setBirthDate(userDetails.getBirthDate());
//             updatedUser.setGender(userDetails.getGender());
//             updatedUser.setAddress1(userDetails.getAddress1());
//             updatedUser.setAddress2(userDetails.getAddress2());
//             return userRepository.save(updatedUser);
//         }
//         return null;
//     }

//     public void deleteUser(Long id) {
//         userRepository.deleteById(id);
//     }
// }



package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Register;
import com.example.demo.Repository.RegisterRepository;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;

    // Retrieve all registers
    public List<Register> getAllRegisters() {
        return registerRepository.findAll();
    }

    // Retrieve a register by ID
    public Optional<Register> getRegisterById(Long id) {
        return registerRepository.findById(id);
    }

    // Create or update a register
    public Register saveRegister(Register register) {
        return registerRepository.save(register);
    }

    // Delete a register by ID
    public void deleteRegister(Long id) {
        registerRepository.deleteById(id);
    }
}
