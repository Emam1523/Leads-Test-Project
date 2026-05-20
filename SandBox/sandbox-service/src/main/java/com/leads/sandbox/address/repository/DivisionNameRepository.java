package com.leads.sandbox.address.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DivisionNameRepository extends JpaRepository<DivisionName, Long> {

    List<DivisionName> findByCountryId(Long countryId);
}

