package com.leads.sandbox.register.command;

import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.validation.Valid;

public class UpdateClientAddress {
    @Valid
    @JsonAlias({"addressInfo", "addressDetails", "addressAndContact"})
    private AddressContactDto addressContact;
    
    private String clientId;

    public AddressContactDto getAddressContact() { return addressContact; }
    public void setAddressContact(AddressContactDto addressContact) { this.addressContact = addressContact; }
    
    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }

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

        public String normalize(Object value) {
            if (value == null) {
                return null;
            }
            if (value instanceof String str) {
                return str;
            }
            return value.toString();
        }
        public String getAddressType() { return addressType; }
        public void setAddressType(Object addressType) { this.addressType = normalize(addressType); }
        public String getCountry() { return country; }
        public void setCountry(Object country) { this.country = normalize(country); }
        public String getDivision() { return division; }
        public void setDivision(Object division) { this.division = normalize(division); }
        public String getDistrict() { return district; }
        public void setDistrict(Object district) { this.district = normalize(district); }
        public String getThana() { return thana; }
        public void setThana(Object thana) { this.thana = normalize(thana); }
        public String getCity() { return city; }
        public void setCity(String city) { this.city = city; }
        public String getZipCode(){return zipCode;}
        public void setZipCode(String zipCode){this.zipCode = zipCode;}
        public String getMobileNo(){return mobileNo;}
        public void setMobileNo(String mobileNo){this.mobileNo=mobileNo;}
        public String getEmail(){return email;}
        public void setEmail(String email){this.email=email;}
         public String getAddress() { return address; }
        public void setAddress(String address) { this.address = address; }
    }
}
