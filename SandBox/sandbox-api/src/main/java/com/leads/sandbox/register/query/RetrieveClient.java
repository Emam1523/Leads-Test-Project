package com.leads.sandbox.register.query;

import com.leads.sandbox.address.query.RetrieveLookUpItem;

import java.time.LocalDateTime;

public class RetrieveClient {

    private String clientId;
    private String clientName;

    private String fatherName;
    private String motherName;
    private String dateOfBirth;
    private String gender;
    private String maritalStatus;
    private String spouseName;
    private String nid;

    private RetrieveLookUpItem addressType;
    private RetrieveLookUpItem country;
    private RetrieveLookUpItem division;
    private RetrieveLookUpItem district;
    private RetrieveLookUpItem thana;
    private String city;
    private String zipCode;
    private String mobileNo;
    private String email;
    private String address;


    private String officeCode;
    private String accountNo;
    private String accountTitle;
    private String accountOpenDate;
    private String accountExpiryDate;
    private Double limitAmount;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getFatherName() { return fatherName; }
    public void setFatherName(String fatherName) { this.fatherName = fatherName; }

    public String getMotherName() { return motherName; }
    public void setMotherName(String motherName) { this.motherName = motherName; }

    public String getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(String dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getMaritalStatus() { return maritalStatus; }
    public void setMaritalStatus(String maritalStatus) { this.maritalStatus = maritalStatus; }

    public String getSpouseName() { return spouseName; }
    public void setSpouseName(String spouseName) { this.spouseName = spouseName; }

    public String getNid() { return nid; }
    public void setNid(String nid) { this.nid = nid; }

    public RetrieveLookUpItem getAddressType() { return addressType; }
    public void setAddressType(RetrieveLookUpItem addressType) { this.addressType = addressType; }

    public RetrieveLookUpItem getCountry() { return country; }
    public void setCountry(RetrieveLookUpItem country) { this.country = country; }

    public RetrieveLookUpItem getDivision() { return division; }
    public void setDivision(RetrieveLookUpItem division) { this.division = division; }

    public RetrieveLookUpItem getDistrict() { return district; }
    public void setDistrict(RetrieveLookUpItem district) { this.district = district; }

    public RetrieveLookUpItem getThana() { return thana; }
    public void setThana(RetrieveLookUpItem thana) { this.thana = thana; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getZipCode() { return zipCode; }
    public void setZipCode(String zipCode) { this.zipCode = zipCode; }

    public String getMobileNo() { return mobileNo; }
    public void setMobileNo(String mobileNo) { this.mobileNo = mobileNo; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getOfficeCode() { return officeCode; }
    public void setOfficeCode(String officeCode) { this.officeCode = officeCode; }

    public String getAccountNo() { return accountNo; }
    public void setAccountNo(String accountNo) { this.accountNo = accountNo; }

    public String getAccountTitle() { return accountTitle; }
    public void setAccountTitle(String accountTitle) { this.accountTitle = accountTitle; }

    public String getAccountOpenDate() { return accountOpenDate; }
    public void setAccountOpenDate(String accountOpenDate) { this.accountOpenDate = accountOpenDate; }

    public String getAccountExpiryDate() { return accountExpiryDate; }
    public void setAccountExpiryDate(String accountExpiryDate) { this.accountExpiryDate = accountExpiryDate; }

    public Double getLimitAmount() { return limitAmount; }
    public void setLimitAmount(Double limitAmount) { this.limitAmount = limitAmount; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
