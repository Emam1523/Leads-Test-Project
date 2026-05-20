package com.leads.sandbox.register.query;

import com.leads.sandbox.register.command.UpdateClientAddress;

public class RetriveClientAddress {
    private String clientId;
    private String message;
    private UpdateClientAddress.AddressContactDto addressContact;

    // Constructor for update/delete responses (no address data)
    public RetriveClientAddress(String clientId, String message) {
        this.clientId = clientId;
        this.message = message;
        this.addressContact = null;
    }

    // Constructor for GET response (includes address data)
    public RetriveClientAddress(String clientId, String message, UpdateClientAddress.AddressContactDto addressContact) {
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
