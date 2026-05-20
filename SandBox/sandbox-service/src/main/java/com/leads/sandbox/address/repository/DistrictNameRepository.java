package com.leads.sandbox.address.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistrictNameRepository extends JpaRepository<DistrictName, Long> {

    List<DistrictName> findByDivisionId(Long divisionId);
}

