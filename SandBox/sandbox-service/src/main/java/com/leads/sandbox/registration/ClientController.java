package com.leads.sandbox.registration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.leads.sandbox.customException.BadRequestException;
import com.leads.sandbox.register.command.*;
import com.leads.sandbox.register.query.*;
import com.leads.sandbox.register.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientCommandService clientCommandService;
    private final ClientQueryService clientQueryService;
    private final ObjectMapper objectMapper;

    public ClientController(
            ClientCommandService clientCommandService,
            ClientQueryService clientQueryService,
            ObjectMapper objectMapper
    ) {
        this.clientCommandService = clientCommandService;
        this.clientQueryService = clientQueryService;
        this.objectMapper = objectMapper;
    }

    @PostMapping("/generateId")
    public ResponseEntity<RetrieveClientId> registerGenerateClientId(
            @Valid @RequestBody GenerateClientId request) {
        RetrieveClientId response = clientCommandService.process(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/save")
    public ResponseEntity<RetrieveClientId> registerClient(
            @Valid @RequestBody RegisterClient request) {
        RetrieveClientId response = clientCommandService.process(request);
        return ResponseEntity.ok(response);
    }

    @PutMapping({"/{clientId}/update", "/{clientId}"})
    public ResponseEntity<RetrieveClientUpdate> updateClient(
            @PathVariable("clientId") String clientId,
            @Valid @RequestBody(required = false) UpdateClientInfo request
    ) {
        RetrieveClientUpdate response = clientCommandService.updateClient(clientId, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{clientId}/delete")
    public ResponseEntity<?> deleteByScope(
            @PathVariable("clientId") String clientId,
            @RequestParam(value = "scope", required = false) String scope
    ) {

        if (scope.equalsIgnoreCase("client")) {
            DeleteClient response = clientCommandService.deleteClient(clientId);
            return ResponseEntity.ok(response);
        }

        if (scope.equalsIgnoreCase("address")) {
            DeleteAddress response = clientCommandService.deleteAddress(clientId);
            return ResponseEntity.ok(response);
        }

        if (scope.equalsIgnoreCase("account")) {
            DeleteAccount response = clientCommandService.deleteAccount(clientId);
            return ResponseEntity.ok(response);
        }
        throw new BadRequestException("Invalid scope. Please specify client, address or account.");
    }

    @GetMapping("/{clientId}")
    public ResponseEntity<RetrieveClient> getClientById(@PathVariable String clientId) {
        return ResponseEntity.ok(clientQueryService.retrieveClientById(clientId));
    }

    @GetMapping("/list")
    public ResponseEntity<List<RetrieveClient>> getAllClients() {
        return ResponseEntity.ok(clientQueryService.retrieveAllClients());
    }

    @GetMapping("{clientId}/details")
    public ResponseEntity<RetrieveClient> retrieveClientResponse(@PathVariable String clientId) {
        return ResponseEntity.ok(clientQueryService.retrieveClientById(clientId));
    }

    @GetMapping("/{clientId}/address")
    public ResponseEntity<RetriveClientAddress> getClientAddress(
            @PathVariable("clientId") String clientId
    ) {
        RetriveClientAddress response = clientQueryService.getClientAddress(clientId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{clientId}/updateAddress")
    public ResponseEntity<RetriveClientAddress> editAddress(
            @PathVariable("clientId") String clientId,
            @Valid @RequestBody(required = false) JsonNode body
    ) {
        UpdateClientAddress request = toUpdateAddressRequest(body);
        RetriveClientAddress response = clientCommandService.updateClientAddress(clientId, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{clientId}/address")
    public ResponseEntity<DeleteAddress> deleteClientAddress(
            @PathVariable("clientId") String clientId
    ) {
        DeleteAddress response = clientCommandService.deleteAddress(clientId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{clientId}/account")
    public ResponseEntity<RetrieveClientAccount> getClientAccount(@PathVariable("clientId") String clientId) {
        return ResponseEntity.ok(clientQueryService.getClientAccount(clientId));
    }

    @PutMapping({"/{clientId}/updateAccount", "/{clientId}/account"})
    public ResponseEntity<RetrieveClientAccount> updateClientAccount(
            @PathVariable("clientId") String clientId,
            @Valid @RequestBody(required = false) JsonNode body
    ) {
        UpdateClientAccount request = toUpdateAccountRequest(body);
        return ResponseEntity.ok(clientCommandService.updateClientAccount(clientId, request));
    }

    @DeleteMapping("/{clientId}/account")
    public ResponseEntity<DeleteAccount> deleteClientAccount(
            @PathVariable("clientId") String clientId
    ) {
        DeleteAccount response = clientCommandService.deleteAccount(clientId);
        return ResponseEntity.ok(response);
    }

    private UpdateClientAccount toUpdateAccountRequest(JsonNode body) {
        if (body == null || body.isNull() || body.isEmpty()) {
            throw new BadRequestException("Account payload is required");
        }

        JsonNode accountNode = firstNonNullChild(body, "accountInfo", "accountDetails", "accountAndInfo");
        JsonNode source = accountNode != null ? accountNode : body;

        return objectMapper.convertValue(source, UpdateClientAccount.class);
    }

    private UpdateClientAddress toUpdateAddressRequest(JsonNode body) {
        if (body == null || body.isNull() || body.isEmpty()) {
            throw new BadRequestException("Address payload is required");
        }

        JsonNode addressNode = firstNonNullChild(body, "addressContact", "addressInfo", "addressDetails", "addressAndContact");
        JsonNode source = addressNode != null ? addressNode : body;

        UpdateClientAddress request = new UpdateClientAddress();
        request.setAddressContact(objectMapper.convertValue(source, UpdateClientAddress.AddressContactDto.class));
        return request;
    }

    private JsonNode firstNonNullChild(JsonNode node, String... fieldNames) {
        for (String fieldName : fieldNames) {
            JsonNode child = node.get(fieldName);
            if (child != null && !child.isNull()) {
                return child;
            }
        }
        return null;
    }
}
