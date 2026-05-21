package com.leads.sandbox.register.command;

import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.validation.Valid;

public class UpdateClientAccountPayload extends UpdateClientAccount {
    private String clientId;
    private String message;

    @Valid
    @JsonAlias({"accountDetails", "accountAndInfo"})
    private UpdateClientAccount accountInfo;

    public UpdateClientAccountPayload(String clientId, String message, UpdateClientAccount accountInfo) {
        this.clientId = clientId;
        this.message = message;
        this.accountInfo = accountInfo;
    }

    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public UpdateClientAccount getAccountInfo() { return accountInfo; }
    public void setAccountInfo(UpdateClientAccount accountInfo) { this.accountInfo = accountInfo; }
}
