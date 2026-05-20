package com.leads.sandbox.address.repository;

import jakarta.persistence.*;
@Entity
@Table(name = "ADDRESS_TYPE_EMAM")
public class AddressType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;

    public AddressType() {}

    public Long getId() { return id; }
    public String getType() { return type; }
}