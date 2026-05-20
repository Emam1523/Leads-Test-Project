package com.leads.sandbox.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AddressContactRepository extends JpaRepository<AddressContact, Long> {

    @Query("select a from AddressContact a where trim(a.clientId) = trim(:clientId)")
    Optional<AddressContact> findByClientIdNormalized(@Param("clientId") String clientId);

    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("delete from AddressContact a where trim(a.clientId) = trim(:clientId)")
    int deleteAllByClientIdNormalized(@Param("clientId") String clientId);

    Optional<AddressContact> findByClientId(String clientId);

    Optional<AddressContact> findByMobileNo(String mobileNo);

    Optional<AddressContact> findByEmail(String email);
}
