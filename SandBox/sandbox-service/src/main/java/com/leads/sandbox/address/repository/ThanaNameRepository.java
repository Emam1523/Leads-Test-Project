package com.leads.sandbox.address.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ThanaNameRepository extends JpaRepository<ThanaName, Long> {

    List<ThanaName> findByDistrictId(Long districtId);
}

