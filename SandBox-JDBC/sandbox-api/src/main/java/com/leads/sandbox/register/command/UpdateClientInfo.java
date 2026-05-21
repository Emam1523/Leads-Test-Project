package com.leads.sandbox.register.command;
import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.validation.Valid;

public class UpdateClientInfo {
    @Valid
    private RegisterClient.ClientInfoDto clientInfo;

    @Valid
    private RegisterClient.ClientDetailsDto clientDetails;

    @Valid
    @JsonAlias({"addressInfo", "addressDetails", "addressAndContact"})
    private RegisterClient.AddressContactDto addressContact;

    @Valid
    private RegisterClient.AccountInfoDto accountInfo;


    public RegisterClient.ClientInfoDto getClientInfo() { return clientInfo; }
    public void setClientInfo(RegisterClient.ClientInfoDto clientInfo) { this.clientInfo = clientInfo; }

    public RegisterClient.ClientDetailsDto getClientDetails() { return clientDetails; }
    public void setClientDetails(RegisterClient.ClientDetailsDto clientDetails) { this.clientDetails = clientDetails; }

    public RegisterClient.AddressContactDto getAddressContact() { return addressContact; }
    public void setAddressContact(RegisterClient.AddressContactDto addressContact) { this.addressContact = addressContact; }

    public RegisterClient.AccountInfoDto getAccountInfo() { return accountInfo; }
    public void setAccountInfo(RegisterClient.AccountInfoDto accountInfo) { this.accountInfo = accountInfo; }
}
