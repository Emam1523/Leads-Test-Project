package com.leads.sandbox.address.repository;

import jakarta.persistence.*;

@Entity
@Table(name = "DIVISION_NAME_EMAM")
public class DivisionName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "DIVISION")
    private String division;

    @Column(name = "COUNTRY_ID")
    private Long countryId;

    public DivisionName() {}

    public Long getId() { return id; }
    public String getDivision() { return division; }
    public Long getCountryId() { return countryId; }
}
