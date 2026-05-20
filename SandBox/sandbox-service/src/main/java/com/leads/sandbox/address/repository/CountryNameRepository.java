package com.leads.sandbox.address.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface CountryNameRepository extends JpaRepository<CountryName, Long> {

    Collection<Object> findByCountryName(String countryName);
}

