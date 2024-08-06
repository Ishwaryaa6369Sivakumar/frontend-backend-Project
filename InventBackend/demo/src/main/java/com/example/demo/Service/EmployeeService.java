package com.example.demo.Service;

import com.example.demo.Model.Employee;
import com.example.demo.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(String employeeId) {
        return employeeRepository.findById(employeeId);
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(String employeeId, Employee employee) {
        if (employeeRepository.existsById(employeeId)) {
            employee.setEmployeeId(employeeId);
            return employeeRepository.save(employee);
        }
        return null; 
    }

    public void deleteEmployee(String employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}
