package com.leads.sandbox.register.command;

import com.fasterxml.jackson.annotation.JsonAlias;

public class UpdateClientAddressPayload extends UpdateClientAddress.AddressContactDto {
    private String clientId;
    private String message;

    @JsonAlias({"addressInfo", "addressDetails", "addressAndContact"})
    private UpdateClientAddress.AddressContactDto addressContact;

    public UpdateClientAddressPayload(String clientId, String message, UpdateClientAddress.AddressContactDto addressContact) {
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
