package com.leads.sandbox.register.command;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.leads.sandbox.common.json.LookupValueNormalizer;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public class RegisterClient {

    @Valid
    @NotNull
    private ClientInfoDto clientInfo;

    @Valid
    @NotNull
    private ClientDetailsDto clientDetails;

    @Valid
    @NotNull
    @JsonAlias({"addressInfo", "addressDetails", "addressAndContact"})
    private AddressContactDto addressContact;

    @Valid
    @NotNull
    private AccountInfoDto accountInfo;


    public ClientInfoDto getClientInfo() { return clientInfo; }
    public void setClientInfo(ClientInfoDto clientInfo) { this.clientInfo = clientInfo; }

    public ClientDetailsDto getClientDetails() { return clientDetails; }
    public void setClientDetails(ClientDetailsDto clientDetails) { this.clientDetails = clientDetails; }

    public AddressContactDto getAddressContact() { return addressContact; }
    public void setAddressContact(AddressContactDto addressContact) { this.addressContact = addressContact; }

    public AccountInfoDto getAccountInfo() { return accountInfo; }
    public void setAccountInfo(AccountInfoDto accountInfo) { this.accountInfo = accountInfo; }


    public static class ClientInfoDto {
        private String clientName;
        private String clientId;

        public String getClientName() { return clientName; }
        public void setClientName(String clientName) { this.clientName = clientName; }
        public String getClientId() { return clientId; }
        public void setClientId(String clientId) { this.clientId = clientId; }
    }

    public static class ClientDetailsDto {
        private String fatherName;
        private String motherName;
        private LocalDate dateOfBirth;
        private String gender;
        private String maritalStatus;
        private String spouseName;
        private String nid;

        public String getFatherName() { return fatherName; }
        public void setFatherName(String fatherName) { this.fatherName = fatherName; }
        public String getMotherName() { return motherName; }
        public void setMotherName(String motherName) { this.motherName = motherName; }
        public LocalDate getDateOfBirth() { return dateOfBirth; }
        public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }
        public String getGender() { return gender; }
        public void setGender(String gender) { this.gender = gender; }
        public String getMaritalStatus() { return maritalStatus; }
        public void setMaritalStatus(String maritalStatus) { this.maritalStatus = maritalStatus; }
        public String getSpouseName() { return spouseName; }
        public void setSpouseName(String spouseName) { this.spouseName = spouseName; }
        public String getNid() { return nid; }
        public void setNid(String nid) { this.nid = nid; }
    }

    public static class AddressContactDto {
        private String addressType;
        private String country;
        private String division;
        private String district;
        private String thana;
        private String city;
        private String zipCode;
        private String mobileNo;
        private String email;
        @JsonAlias({"fullAddress", "streetAddress", "addressLine", "addressLine1"})
        private String address;

        public String getAddressType() { return addressType; }
        public void setAddressType(Object addressType) { this.addressType = LookupValueNormalizer.normalize(addressType); }
        public String getCountry() { return country; }
        public void setCountry(Object country) { this.country = LookupValueNormalizer.normalize(country); }
        public String getDivision() { return division; }
        public void setDivision(Object division) { this.division = LookupValueNormalizer.normalize(division); }
        public String getDistrict() { return district; }
        public void setDistrict(Object district) { this.district = LookupValueNormalizer.normalize(district); }
        public String getThana() { return thana; }
        public void setThana(Object thana) { this.thana = LookupValueNormalizer.normalize(thana); }
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
    }

    public static class AccountInfoDto {
        private String officeCode;
        private String accountNo;
        private String accountTitle;
        private LocalDate accountOpenDate;
        private LocalDate accountExpiryDate;
        private Double limitAmount;

        public String getOfficeCode() { return officeCode; }
        public void setOfficeCode(String officeCode) { this.officeCode = officeCode; }
        public String getAccountNo() { return accountNo; }
        public void setAccountNo(String accountNo) { this.accountNo = accountNo; }
        public String getAccountTitle() { return accountTitle; }
        public void setAccountTitle(String accountTitle) { this.accountTitle = accountTitle; }
        public LocalDate getAccountOpenDate() { return accountOpenDate; }
        public void setAccountOpenDate(LocalDate accountOpenDate) { this.accountOpenDate = accountOpenDate; }
        public LocalDate getAccountExpiryDate() { return accountExpiryDate; }
        public void setAccountExpiryDate(LocalDate accountExpiryDate) { this.accountExpiryDate = accountExpiryDate; }
        public Double getLimitAmount() { return limitAmount; }
        public void setLimitAmount(Double limitAmount) { this.limitAmount = limitAmount; }
    }
}
