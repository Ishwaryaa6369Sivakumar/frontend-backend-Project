package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminid;
    private String adminname;
    private Long adminemail;
    private Long adminpassword;
    
    public Admin() {
    }
    public Admin(Long adminid, String adminname, Long adminemail, Long adminpassword) {
        this.adminid = adminid;
        this.adminname = adminname;
        this.adminemail = adminemail;
        this.adminpassword = adminpassword;
    }
    public Long getAdminid() {
        return adminid;
    }
    public void setAdminid(Long adminid) {
        this.adminid = adminid;
    }
    public String getAdminname() {
        return adminname;
    }
    public void setAdminname(String adminname) {
        this.adminname = adminname;
    }
    public Long getAdminemail() {
        return adminemail;
    }
    public void setAdminemail(Long adminemail) {
        this.adminemail = adminemail;
    }
    public Long getAdminpassword() {
        return adminpassword;
    }
    public void setAdminpassword(Long adminpassword) {
        this.adminpassword = adminpassword;
    }
   
}