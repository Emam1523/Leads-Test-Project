package com.leads.sandbox.registration;

import com.leads.sandbox.customException.BadRequestException;
import com.leads.sandbox.register.command.*;
import com.leads.sandbox.register.query.*;
import com.leads.sandbox.register.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientCommandService clientCommandService;
    private final ClientQueryService clientQueryService;

    public ClientController(
            ClientCommandService clientCommandService,
            ClientQueryService clientQueryService
    ) {
        this.clientCommandService = clientCommandService;
        this.clientQueryService = clientQueryService;
    }


    @PostMapping("/generateId")
    public ResponseEntity<RetrieveClientId> generateClientId(
            @Valid @RequestBody GenerateClientId request
    ) {
        return ResponseEntity.ok(
                clientCommandService.process(request)
        );
    }

    @PostMapping("/save")
    public ResponseEntity<RetrieveClientId> saveClient(
            @Valid @RequestBody RegisterClient request
    ) {
        return ResponseEntity.ok(
                clientCommandService.process(request)
        );
    }

    @PutMapping("/{clientId}/update")
    public ResponseEntity<RetrieveClientUpdate> updateClient(
            @PathVariable String clientId,
            @Valid @RequestBody(required = false) UpdateClientInfo request
    ) {
        return ResponseEntity.ok(
                clientCommandService.updateClient(
                        clientId,
                        request
                )
        );
    }

    @PutMapping({"/{clientId}/address", "/{clientId}/updateAddress"})
    public ResponseEntity<RetrieveClientAddress> updateClientAddress(
            @PathVariable String clientId,
            @Valid @RequestBody(required = false) UpdateClientAddressPayload payload
    ) {

        String bodyClientId = getStringProperty(payload, "clientId");
        if (StringUtils.hasText(bodyClientId) && !clientId.equals(bodyClientId)) {
            throw new BadRequestException("Path clientId and body clientId do not match");
        }

        UpdateClientAddress request = toAddressRequest(payload);

        return ResponseEntity.ok(
                clientCommandService.updateClientAddress(
                        clientId,
                        request
                )
        );
    }

    private UpdateClientAddress toAddressRequest(UpdateClientAddressPayload payload) {
        UpdateClientAddress request = new UpdateClientAddress();
        if (payload == null) {
            return request;
        }

        BeanWrapper wrapper = new BeanWrapperImpl(payload);

        Object nested = wrapper.getPropertyValue("addressContact");
        if (nested instanceof UpdateClientAddress.AddressContactDto addressContact) {
            request.setAddressContact(addressContact);
            return request;
        }

        UpdateClientAddress.AddressContactDto address = new UpdateClientAddress.AddressContactDto();
        address.setAddressType(wrapper.getPropertyValue("addressType"));
        address.setCountry(wrapper.getPropertyValue("country"));
        address.setDivision(wrapper.getPropertyValue("division"));
        address.setDistrict(wrapper.getPropertyValue("district"));
        address.setThana(wrapper.getPropertyValue("thana"));
        address.setCity((String) wrapper.getPropertyValue("city"));
        address.setZipCode((String) wrapper.getPropertyValue("zipCode"));
        address.setMobileNo((String) wrapper.getPropertyValue("mobileNo"));
        address.setEmail((String) wrapper.getPropertyValue("email"));
        address.setAddress((String) wrapper.getPropertyValue("address"));
        request.setAddressContact(address);
        return request;
    }

    @PutMapping({"/{clientId}/account", "/{clientId}/updateAccount"})
    public ResponseEntity<RetrieveClientAccount> updateClientAccount(
            @PathVariable String clientId,
            @Valid @RequestBody(required = false) UpdateClientAccountPayload payload
    ) {

        String bodyClientId = getStringProperty(payload, "clientId");
        if (StringUtils.hasText(bodyClientId) && !clientId.equals(bodyClientId)) {
            throw new BadRequestException("Path clientId and body clientId do not match");
        }

        UpdateClientAccount request = toAccountRequest(payload);

        return ResponseEntity.ok(
                clientCommandService.updateClientAccount(
                        clientId,
                        request
                )
        );
    }

    private UpdateClientAccount toAccountRequest(UpdateClientAccountPayload payload) {
        if (payload == null) {
            return null;
        }

        BeanWrapper wrapper = new BeanWrapperImpl(payload);

        Object nested = wrapper.getPropertyValue("accountInfo");
        if (nested instanceof UpdateClientAccount accountInfo) {
            return accountInfo;
        }

        UpdateClientAccount request = new UpdateClientAccount();
        request.setOfficeCode((String) wrapper.getPropertyValue("officeCode"));
        request.setAccountNo((String) wrapper.getPropertyValue("accountNo"));
        request.setAccountTitle((String) wrapper.getPropertyValue("accountTitle"));
        request.setAccountOpenDate((java.time.LocalDate) wrapper.getPropertyValue("accountOpenDate"));
        request.setAccountExpiryDate((java.time.LocalDate) wrapper.getPropertyValue("accountExpiryDate"));
        request.setLimitAmount((Double) wrapper.getPropertyValue("limitAmount"));
        return request;
    }

    private String getStringProperty(Object source, String name) {
        if (source == null) {
            return null;
        }

        Object value = new BeanWrapperImpl(source).getPropertyValue(name);
        return value == null ? null : value.toString();
    }

    @DeleteMapping("/{clientId}")
    public ResponseEntity<DeleteClient> deleteClient(
            @PathVariable String clientId
    ) {
        return ResponseEntity.ok(
                clientCommandService.deleteClient(clientId)
        );
    }

    @DeleteMapping("/{clientId}/address")
    public ResponseEntity<DeleteAddress> deleteClientAddress(
            @PathVariable String clientId
    ) {
        return ResponseEntity.ok(
                clientCommandService.deleteAddress(clientId)
        );
    }

    @DeleteMapping("/{clientId}/account")
    public ResponseEntity<DeleteAccount> deleteClientAccount(
            @PathVariable String clientId
    ) {
        return ResponseEntity.ok(
                clientCommandService.deleteAccount(clientId)
        );
    }

    @DeleteMapping("/{clientId}/delete")
    public ResponseEntity<?> deleteClientByScope(
            @PathVariable String clientId,
            @RequestParam(defaultValue = "client") String scope
    ) {

        return switch (scope.toLowerCase()) {
            case "client" -> ResponseEntity.ok(clientCommandService.deleteClient(clientId));
            case "address" -> ResponseEntity.ok(clientCommandService.deleteAddress(clientId));
            case "account" -> ResponseEntity.ok(clientCommandService.deleteAccount(clientId));
            default -> throw new BadRequestException(
                    "Invalid scope. Use client, address, or account"
            );
        };
    }


    @GetMapping("/{clientId}")
    public ResponseEntity<RetrieveClient> getClientById(
            @PathVariable String clientId
    ) {
        return ResponseEntity.ok(
                clientQueryService.retrieveClientById(clientId)
        );
    }

    @GetMapping("/list")
    public ResponseEntity<List<RetrieveClient>> getAllClients() {
        return ResponseEntity.ok(
                clientQueryService.retrieveAllClients()
        );
    }

    @GetMapping("/{clientId}/address")
    public ResponseEntity<RetrieveClientAddress> getClientAddress(
            @PathVariable String clientId
    ) {
        return ResponseEntity.ok(
                clientQueryService.getClientAddress(clientId)
        );
    }

    @GetMapping("/{clientId}/account")
    public ResponseEntity<RetrieveClientAccount> getClientAccount(
            @PathVariable String clientId
    ) {
        return ResponseEntity.ok(
                clientQueryService.getClientAccount(clientId)
        );
    }
}
