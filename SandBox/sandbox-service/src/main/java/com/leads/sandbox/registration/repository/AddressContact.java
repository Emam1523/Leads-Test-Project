package com.leads.sandbox.registration.repository;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(
        name = "ADDRESS_CONTACT_EMAM",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_address_contact_emam_mobile", columnNames = "mobile_no"),
                @UniqueConstraint(name = "uk_address_contact_emam_email", columnNames = "email")
        }
)
public class AddressContact {

    // Required by JPA
    public AddressContact() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "client_id", nullable = false, length = 20)
    private String clientId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", referencedColumnName = "client_id", insertable = false, updatable = false)
    private ClientRegistration clientInfo;

    @Column(name = "address_type", length = 20)
    private String addressType;

    @Column(name = "country", length = 50)
    private String country;

    @Column(name = "division", length = 50)
    private String division;

    @Column(name = "district", length = 50)
    private String district;

    @Column(name = "thana", length = 50)
    private String thana;

    @Column(name = "city", length = 50)
    private String city;

    @Column(name = "zip_code", length = 10)
    private String zipCode;

    @Column(name = "mobile_no", length = 20)
    private String mobileNo;

    @Column(name = "email")
    private String email;

    @Lob
    @Column(name = "address")
    private String address;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }

    public ClientRegistration getClientInfo() { return clientInfo; }
    public void setClientInfo(ClientRegistration clientInfo) { this.clientInfo = clientInfo; }

    public String getAddressType() { return addressType; }
    public void setAddressType(String addressType) { this.addressType = addressType; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public String getDivision() { return division; }
    public void setDivision(String division) { this.division = division; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getThana() { return thana; }
    public void setThana(String thana) { this.thana = thana; }

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
