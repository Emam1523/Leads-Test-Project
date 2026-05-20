package com.leads.sandbox.address.repository;

import jakarta.persistence.*;

@Entity
@Table(name = "THANA_NAME_EMAM")
public class ThanaName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "THANA_NAME")
    private String thanaName;

    @Column(name = "DISTRICT_ID")
    private Long districtId;

    public ThanaName() {}

    public Long getId() { return id; }
    public String getThanaName() { return thanaName; }
    public Long getDistrictId() { return districtId; }
}
