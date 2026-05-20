package com.leads.sandbox.registration.repository;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.time.LocalDate;

@Entity
@Table(
        name = "ACCOUNT_INFO_EMAM",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_account_info_emam_account_no", columnNames = "account_no")
        }
)
public class AccountInfo {

    // Required by JPA
    public AccountInfo() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "client_id", nullable = false, length = 20)
    private String clientId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", referencedColumnName = "client_id", insertable = false, updatable = false)
    private ClientRegistration clientInfo;

    @Column(name = "office_code", length = 20)
    private String officeCode;

    @Column(name = "account_no", length = 30)
    private String accountNo;

    @Column(name = "account_title")
    private String accountTitle;

    @Column(name = "account_open_date")
    private String accountOpenDate;

    @Column(name = "account_expiry_date")
    private String accountExpiryDate;

    @Column(name = "limit_amount")
    private Double limitAmount;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }

    public ClientRegistration getClientInfo() { return clientInfo; }
    public void setClientInfo(ClientRegistration clientInfo) { this.clientInfo = clientInfo; }

    public String getOfficeCode() { return officeCode; }
    public void setOfficeCode(String officeCode) { this.officeCode = officeCode; }

    public String getAccountNo() { return accountNo; }
    public void setAccountNo(String accountNo) { this.accountNo = accountNo; }

    public String getAccountTitle() { return accountTitle; }
    public void setAccountTitle(String accountTitle) { this.accountTitle = accountTitle; }

    public String getAccountOpenDate() { return accountOpenDate; }
    public void setAccountOpenDate(LocalDate accountOpenDate) {
        this.accountOpenDate = accountOpenDate == null ? null : accountOpenDate.toString();
    }

    public String getAccountExpiryDate() { return accountExpiryDate; }
    public void setAccountExpiryDate(LocalDate accountExpiryDate) {
        this.accountExpiryDate = accountExpiryDate == null ? null : accountExpiryDate.toString();
    }

    public Double getLimitAmount() { return limitAmount; }
    public void setLimitAmount(Double limitAmount) { this.limitAmount = limitAmount; }
}
