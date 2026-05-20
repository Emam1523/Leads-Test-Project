package com.leads.sandbox.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientQueryRepository extends JpaRepository<ClientRegistration, Long> {

    Optional<ClientRegistration> findByClientId(String clientId);
}
