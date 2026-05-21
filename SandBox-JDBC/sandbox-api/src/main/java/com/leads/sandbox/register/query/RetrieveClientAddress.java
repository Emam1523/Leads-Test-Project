package com.leads.sandbox.register.query;

import com.leads.sandbox.register.command.UpdateClientAddress;

public class RetrieveClientAddress {
    private String clientId;
    private String message;
    private UpdateClientAddress.AddressContactDto addressContact;


    public RetrieveClientAddress(String clientId, String message) {
        this.clientId = clientId;
        this.message = message;
        this.addressContact = null;
    }


    public RetrieveClientAddress(String clientId, String message, UpdateClientAddress.AddressContactDto addressContact) {
        this.clientId = clientId;
        this.message = message;
        this.addressContact = addressContact;
    }

    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public UpdateClientAddress.AddressContactDto getAddressContact() { return addressContact; }
    public void setAddressContact(UpdateClientAddress.AddressContactDto addressContact) { this.addressContact = addressContact; }
}

