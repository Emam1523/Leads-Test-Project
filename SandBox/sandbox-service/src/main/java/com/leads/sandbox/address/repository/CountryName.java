package com.leads.sandbox.address.repository;

import jakarta.persistence.*;

@Entity
@Table(name = "COUNTRY_NAME_EMAM")
public class CountryName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "COUNTRY_NAME")
    private String countryName;

    public CountryName() {}

    public Long getId() { return id; }
    public String getCountryName() { return countryName; }
}
