package com.example.demo.Model;


import jakarta.persistence.Entity;

import jakarta.persistence.Id;


@Entity
public class Admin {
    @Id
    private String adminid;
    private String adminname;
    private String adminemail;
    private String adminpassword;
    
    public Admin() {
    }
    public Admin(String adminid, String adminname, String adminemail, String adminpassword) {
        this.adminid = adminid;
        this.adminname = adminname;
        this.adminemail = adminemail;
        this.adminpassword = adminpassword;
    }
    public String getAdminid() {
        return adminid;
    }
    public void setAdminid(String adminid) {
        this.adminid = adminid;
    }
    public String getAdminname() {
        return adminname;
    }
    public void setAdminname(String adminname) {
        this.adminname = adminname;
    }
    public String getAdminemail() {
        return adminemail;
    }
    public void setAdminemail(String adminemail) {
        this.adminemail = adminemail;
    }
    public String getAdminpassword() {
        return adminpassword;
    }
    public void setAdminpassword(String adminpassword) {
        this.adminpassword = adminpassword;
    }
   
}





