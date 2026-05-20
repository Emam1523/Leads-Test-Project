package com.leads.sandbox.address.repository;

import jakarta.persistence.*;

@Entity
@Table(name = "DISTRICT_NAME_EMAM")
public class DistrictName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "DISTRICT_NAME")
    private String districtName;

    @Column(name = "DIVISION_ID")
    private Long divisionId;

    public DistrictName() {}

    public Long getId() { return id; }
    public String getDistrictName() { return districtName; }
    public Long getDivisionId() { return divisionId; }
}
