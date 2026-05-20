package com.leads.sandbox.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientDetailsRepository extends JpaRepository<ClientDetails, Long> {

    Optional<ClientDetails> findByNid(String nid);
}
