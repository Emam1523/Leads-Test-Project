package com.leads.sandbox.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRegistrationRepository extends JpaRepository<ClientRegistration, Long> {

    Optional<ClientRegistration> findByClientId(String clientId);

    boolean existsByClientId(String clientId);

    @Query(
            value = """
                    select max(to_number(CLIENT_ID))
                    from CLIENT_INFO_EMAM
                    where regexp_like(CLIENT_ID, '^[0-9]+$')
                    """,
            nativeQuery = true
    )
    Optional<Long> findMaxNumericClientId();
}
