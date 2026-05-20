package com.leads.sandbox.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountInfoRepository extends JpaRepository<AccountInfo, Long> {

    @Query("select a from AccountInfo a where trim(a.clientId) = trim(:clientId)")
    Optional<AccountInfo> findByClientIdNormalized(@Param("clientId") String clientId);

    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("delete from AccountInfo a where trim(a.clientId) = trim(:clientId)")
    int deleteAllByClientIdNormalized(@Param("clientId") String clientId);

    Optional<AccountInfo> findByAccountNo(String accountNo);

}
