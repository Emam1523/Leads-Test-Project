package com.leads.sandbox.register.command;

public class DeleteAccount {
    private String clientId;
    private String message;


    public DeleteAccount(String clientId, String message) {
        this.clientId = clientId;
        this.message = message;
    }

    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
