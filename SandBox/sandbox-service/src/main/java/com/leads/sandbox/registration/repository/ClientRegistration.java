package com.leads.sandbox.registration.repository;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import java.time.LocalDateTime;

@Entity
@Table(name = "CLIENT_INFO_EMAM")
public class ClientRegistration {

    public ClientRegistration() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "client_id", nullable = false, length = 20, unique = true)
    private String clientId;

    @Column(name = "client_name", nullable = false)
    private String clientName;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @OneToOne(mappedBy = "clientInfo", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private ClientDetails clientDetails;

    @OneToOne(mappedBy = "clientInfo", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private AddressContact addressContact;

    @OneToOne(mappedBy = "clientInfo", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private AccountInfo accountInfo;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public ClientDetails getClientDetails() { return clientDetails; }
    public void setClientDetails(ClientDetails clientDetails) { this.clientDetails = clientDetails; }

    public AddressContact getAddressContact() { return addressContact; }
    public void setAddressContact(AddressContact addressContact) { this.addressContact = addressContact; }

    public AccountInfo getAccountInfo() { return accountInfo; }
    public void setAccountInfo(AccountInfo accountInfo) { this.accountInfo = accountInfo; }
}
