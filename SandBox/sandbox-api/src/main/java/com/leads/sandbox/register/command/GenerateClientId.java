package com.leads.sandbox.register.command;

import jakarta.validation.constraints.NotBlank;

public class GenerateClientId {

    @NotBlank(message = "Client name is required")
    private String clientName;

    public GenerateClientId(String clientName) {
        this.clientName = clientName;
    }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }
}
