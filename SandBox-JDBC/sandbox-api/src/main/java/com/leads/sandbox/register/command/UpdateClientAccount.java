package com.leads.sandbox.register.command;

import com.fasterxml.jackson.annotation.JsonAlias;

import java.time.LocalDate;

public class UpdateClientAccount {
    @JsonAlias({"accountNumber", "accountNo"})
    private String accountNo;

    @JsonAlias({"accountType", "accountTitle"})
    private String accountTitle;

    private String officeCode;
    private LocalDate accountOpenDate;
    private LocalDate accountExpiryDate;
    private Double limitAmount;

    public String getAccountNo() { return accountNo; }
    public void setAccountNo(String accountNo) { this.accountNo = accountNo; }

    public String getAccountTitle() { return accountTitle; }
    public void setAccountTitle(String accountTitle) { this.accountTitle = accountTitle; }

    public String getOfficeCode() { return officeCode; }
    public void setOfficeCode(String officeCode) { this.officeCode = officeCode; }

    public LocalDate getAccountOpenDate() { return accountOpenDate; }
    public void setAccountOpenDate(LocalDate accountOpenDate) { this.accountOpenDate = accountOpenDate; }

    public LocalDate getAccountExpiryDate() { return accountExpiryDate; }
    public void setAccountExpiryDate(LocalDate accountExpiryDate) { this.accountExpiryDate = accountExpiryDate; }

    public Double getLimitAmount() { return limitAmount; }
    public void setLimitAmount(Double limitAmount) { this.limitAmount = limitAmount; }


}
