package com.leads.sandbox.register.command;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.leads.sandbox.common.json.LookupValueNormalizer;
import jakarta.validation.Valid;

public class UpdateClientAddress {
    @Valid
    @JsonAlias({"addressInfo", "addressDetails", "addressAndContact"})
    private AddressContactDto addressContact;

    public AddressContactDto getAddressContact() { return addressContact; }
    public void setAddressContact(AddressContactDto addressContact) { this.addressContact = addressContact; }


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
}
