package com.leads.sandbox.registration;

import com.leads.sandbox.customException.*;
import com.leads.sandbox.register.command.*;
import com.leads.sandbox.register.command.RegisterClient.*;
import com.leads.sandbox.register.query.*;
import com.leads.sandbox.register.service.ClientCommandService;
import com.leads.sandbox.registration.repository.*;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Service
public class ClientServiceImpl implements ClientCommandService {

    private static final long FIRST_CLIENT_ID_NUMBER = 1000L;
    private static final int CLIENT_ID_LENGTH = 4;
    private static final String CLIENT_ID_FORMAT = "%0" + CLIENT_ID_LENGTH + "d";

    private final ClientRegistrationRepository clientRepository;
    private final ClientDetailsRepository clientDetailsRepository;
    private final AddressContactRepository addressContactRepository;
    private final AccountInfoRepository accountInfoRepository;

    public ClientServiceImpl(
            ClientRegistrationRepository clientRepository,
            ClientDetailsRepository clientDetailsRepository,
            AddressContactRepository addressContactRepository,
            AccountInfoRepository accountInfoRepository
    ) {
        this.clientRepository = clientRepository;
        this.clientDetailsRepository = clientDetailsRepository;
        this.addressContactRepository = addressContactRepository;
        this.accountInfoRepository = accountInfoRepository;
    }

    @Override
    public RetrieveClientId process(GenerateClientId request) {
        String clientName = request == null ? null : request.getClientName();

        if (!StringUtils.hasText(clientName)) {
            throw new BadRequestException("Client name is required");
        }

        for (int attempt = 0; attempt < 5; attempt++) {
            String generatedClientId = generateUniqueClientId();

            ClientRegistration client = new ClientRegistration();
            client.setClientId(generatedClientId);
            client.setClientName(clientName);

            try {
                clientRepository.save(client);
                return new RetrieveClientId(generatedClientId);
            } catch (DataIntegrityViolationException ex) {
                if (attempt == 4) {
                    throw new ConflictException("Client ID already exists. Please try again.");
                }
            }
        }

        throw new ConflictException("Unable to generate client ID. Please try again.");
    }

    @Override
    @Transactional
    public RetrieveClientId process(RegisterClient request) {

        String clientId = null;

        if (request.getClientInfo() != null) {
            clientId = request.getClientInfo().getClientId();
        }

        ClientRegistration client;

        if (StringUtils.hasText(clientId)) {
            client = clientRepository.findByClientId(clientId)
                    .orElseGet(ClientRegistration::new);

            client.setClientId(clientId);

        } else {

            client = new ClientRegistration();
            client.setClientId(generateClientId());
        }

        mapClientInfo(request.getClientInfo(), client);
        mapClientDetails(request.getClientDetails(), client);
        mapAddressContact(request.getAddressContact(), client);
        mapAccountInfo(request.getAccountInfo(), client);

        validateUniqueFields(client);

        ClientRegistration savedClient = saveClient(client);

        return new RetrieveClientId(savedClient.getClientId());
    }

    @Override
    @Transactional
    public RetrieveClientUpdate updateClient(String clientId, UpdateClientInfo request) {
        ClientRegistration client = findClientByClientId(clientId);

        if (request != null && request.getClientInfo() != null && StringUtils.hasText(request.getClientInfo().getClientName())) {
            client.setClientName(request.getClientInfo().getClientName());
        }

        updateClientDetails(request == null ? null : request.getClientDetails(), client);
        updateAddressContact(request == null ? null : request.getAddressContact(), client);
        updateAccountInfo(request == null ? null : request.getAccountInfo(), client);

        clientRepository.save(client);

        return new RetrieveClientUpdate(client.getClientId(), "Client Updated Successfully");
    }

    @Override
    @Transactional
    public DeleteClient deleteClient(String clientId) {
        ClientRegistration client = findClientByClientId(clientId);

        clientRepository.delete(client);
        return new DeleteClient(clientId, "Client deleted successfully");
    }

    @Override
    @Transactional
    public RetriveClientAddress updateClientAddress(String clientId, UpdateClientAddress request) {
        if (request == null || request.getAddressContact() == null) {
            throw new BadRequestException("Address payload is required");
        }

        ClientRegistration client = findClientByClientId(clientId);

        AddressContact address = addressContactRepository.findByClientIdNormalized(clientId)
                .orElseGet(AddressContact::new);
        address.setClientId(client.getClientId());
        address.setClientInfo(client);

        UpdateClientAddress.AddressContactDto dto = request.getAddressContact();
        if (dto.getAddressType() != null) address.setAddressType(dto.getAddressType());
        if (dto.getCountry() != null) address.setCountry(dto.getCountry());
        if (dto.getDivision() != null) address.setDivision(dto.getDivision());
        if (dto.getDistrict() != null) address.setDistrict(dto.getDistrict());
        if (dto.getThana() != null) address.setThana(dto.getThana());
        if (dto.getCity() != null) address.setCity(dto.getCity());
        if (dto.getZipCode() != null) address.setZipCode(dto.getZipCode());
        if (dto.getMobileNo() != null) address.setMobileNo(dto.getMobileNo());
        if (dto.getEmail() != null) address.setEmail(dto.getEmail());
        if (dto.getAddress() != null) address.setAddress(dto.getAddress());

        addressContactRepository.save(address);

        return new RetriveClientAddress(clientId, "Address updated successfully");
    }

    @Override
    @Transactional
    public RetrieveClientAccount updateClientAccount(String clientId, UpdateClientAccount request) {
        if (request == null) {
            throw new BadRequestException("Account payload is required");
        }

        ClientRegistration client = findClientByClientId(clientId);

        AccountInfo account = accountInfoRepository.findByClientIdNormalized(clientId)
                .orElseGet(AccountInfo::new);

        account.setClientId(client.getClientId());
        account.setClientInfo(client);

        if (request.getOfficeCode() != null) account.setOfficeCode(request.getOfficeCode());
        if (request.getAccountNo() != null) account.setAccountNo(request.getAccountNo());
        if (request.getAccountTitle() != null) account.setAccountTitle(request.getAccountTitle());
        if (request.getAccountOpenDate() != null) account.setAccountOpenDate(request.getAccountOpenDate());
        if (request.getAccountExpiryDate() != null) account.setAccountExpiryDate(request.getAccountExpiryDate());
        if (request.getLimitAmount() != null) account.setLimitAmount(request.getLimitAmount());

        accountInfoRepository.save(account);

        return toAccountResponse(client.getClientId(), "Account updated successfully", account);
    }

    @Override
    @Transactional
    public DeleteAddress deleteAddress(String clientId) {
        if (addressContactRepository.findByClientIdNormalized(clientId).isEmpty()) {
            throw new ResourceNotFoundException("Address not found for client ID: " + clientId);
        }

        int deletedRows = addressContactRepository.deleteAllByClientIdNormalized(clientId);
        if (deletedRows == 0) {
            throw new ResourceNotFoundException("Address not found for client ID: " + clientId);
        }

        return new DeleteAddress(clientId, "Address deleted successfully");
    }

    @Override
    @Transactional
    public DeleteAccount deleteAccount(String clientId) {
        if (accountInfoRepository.findByClientIdNormalized(clientId).isEmpty()) {
            throw new ResourceNotFoundException("Account not found for client ID: " + clientId);
        }

        int deletedRows = accountInfoRepository.deleteAllByClientIdNormalized(clientId);
        if (deletedRows == 0) {
            throw new ResourceNotFoundException("Account not found for client ID: " + clientId);
        }

        return new DeleteAccount(clientId, "Account deleted successfully");
    }

    private ClientRegistration saveClient(ClientRegistration client) {

        try {
            ClientRegistration savedClient = clientRepository.save(client);
            saveChildRecords(savedClient);
            clientRepository.flush();
            clientDetailsRepository.flush();
            addressContactRepository.flush();
            accountInfoRepository.flush();
            return savedClient;

        } catch (DataIntegrityViolationException ex) {

            String errorMessage = resolveDuplicateMessage(client, ex);

            throw new ConflictException(errorMessage);
        }
    }

    private void saveChildRecords(ClientRegistration client) {

        ClientDetails clientDetails = client.getClientDetails();
        if (clientDetails != null) {
            clientDetails.setClientId(client.getClientId());
            clientDetails.setClientInfo(client);
            clientDetailsRepository.save(clientDetails);
        }

        AddressContact addressContact = client.getAddressContact();
        if (addressContact != null) {
            addressContact.setClientId(client.getClientId());
            addressContact.setClientInfo(client);
            addressContactRepository.save(addressContact);
        }

        AccountInfo accountInfo = client.getAccountInfo();
        if (accountInfo != null) {
            accountInfo.setClientId(client.getClientId());
            accountInfo.setClientInfo(client);
            accountInfoRepository.save(accountInfo);
        }
    }

    private ClientRegistration findClientByClientId(String clientId) {
        return clientRepository.findByClientId(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client not found with ID: " + clientId));
    }

    private RetrieveClientAccount toAccountResponse(String clientId, String message, AccountInfo account) {
        RetrieveClientAccount response = new RetrieveClientAccount(clientId, message);
        if (account != null) {
            response.setAccountNo(account.getAccountNo());
            response.setAccountTitle(account.getAccountTitle());
            response.setOfficeCode(account.getOfficeCode());
            response.setAccountOpenDate(parseLocalDate(account.getAccountOpenDate()));
            response.setAccountExpiryDate(parseLocalDate(account.getAccountExpiryDate()));
            response.setLimitAmount(account.getLimitAmount());
        }
        return response;
    }

    private java.time.LocalDate parseLocalDate(String value) {
        return value == null || value.isBlank() ? null : java.time.LocalDate.parse(value);
    }

    private void updateClientDetails(ClientDetailsDto dto, ClientRegistration client) {
        if (dto == null) {
            return;
        }

        ClientDetails details = client.getClientDetails();
        if (details == null) {
            details = new ClientDetails();
            details.setClientInfo(client);
            details.setClientId(client.getClientId());
            client.setClientDetails(details);
        }

        if (dto.getFatherName() != null) details.setFatherName(dto.getFatherName());
        if (dto.getMotherName() != null) details.setMotherName(dto.getMotherName());
        if (dto.getDateOfBirth() != null) details.setDateOfBirth(dto.getDateOfBirth());
        if (dto.getGender() != null) details.setGender(dto.getGender());
        if (dto.getMaritalStatus() != null) details.setMaritalStatus(dto.getMaritalStatus());
        if (dto.getSpouseName() != null) details.setSpouseName(dto.getSpouseName());
        if (dto.getNid() != null) details.setNid(dto.getNid());
    }

    private void updateAddressContact(AddressContactDto dto, ClientRegistration client) {
        if (dto == null) {
            return;
        }

        AddressContact address = client.getAddressContact();
        if (address == null) {
            address = addressContactRepository.findByClientId(client.getClientId()).orElseGet(AddressContact::new);
            address.setClientInfo(client);
            address.setClientId(client.getClientId());
            client.setAddressContact(address);
        }

        if (dto.getAddressType() != null) address.setAddressType(dto.getAddressType());
        if (dto.getCountry() != null) address.setCountry(dto.getCountry());
        if (dto.getDivision() != null) address.setDivision(dto.getDivision());
        if (dto.getDistrict() != null) address.setDistrict(dto.getDistrict());
        if (dto.getThana() != null) address.setThana(dto.getThana());
        if (dto.getCity() != null) address.setCity(dto.getCity());
        if (dto.getZipCode() != null) address.setZipCode(dto.getZipCode());
        if (dto.getMobileNo() != null) address.setMobileNo(dto.getMobileNo());
        if (dto.getEmail() != null) address.setEmail(dto.getEmail());
        if (dto.getAddress() != null) address.setAddress(dto.getAddress());
    }

    private void updateAccountInfo(AccountInfoDto dto, ClientRegistration client) {
        if (dto == null) {
            return;
        }

        AccountInfo account = client.getAccountInfo();
        if (account == null) {
            account = new AccountInfo();
            account.setClientInfo(client);
            account.setClientId(client.getClientId());
            client.setAccountInfo(account);
        }

        if (dto.getOfficeCode() != null) account.setOfficeCode(dto.getOfficeCode());
        if (dto.getAccountNo() != null) account.setAccountNo(dto.getAccountNo());
        if (dto.getAccountTitle() != null) account.setAccountTitle(dto.getAccountTitle());
        if (dto.getAccountOpenDate() != null) account.setAccountOpenDate(dto.getAccountOpenDate());
        if (dto.getAccountExpiryDate() != null) account.setAccountExpiryDate(dto.getAccountExpiryDate());
        if (dto.getLimitAmount() != null) account.setLimitAmount(dto.getLimitAmount());
    }

    private String resolveDuplicateMessage(
            ClientRegistration client,
            DataIntegrityViolationException ex
    ) {

        String details = ex.getMostSpecificCause().getMessage();
        String lowerDetails = details == null ? "" : details.toLowerCase();

        ClientDetails clientDetails = client.getClientDetails();

        if (clientDetails != null
                && StringUtils.hasText(clientDetails.getNid())
                && lowerDetails.contains("nid")) {

            return "NID already exists: " + clientDetails.getNid();
        }

        AddressContact addressContact = client.getAddressContact();

        if (addressContact != null) {

            if (StringUtils.hasText(addressContact.getMobileNo())
                    && lowerDetails.contains("mobile")) {

                return "Mobile number already exists: "
                        + addressContact.getMobileNo();
            }

            if (StringUtils.hasText(addressContact.getEmail())
                    && lowerDetails.contains("email")) {

                return "Email already exists: "
                        + addressContact.getEmail();
            }
        }

        AccountInfo accountInfo = client.getAccountInfo();

        if (accountInfo != null
                && StringUtils.hasText(accountInfo.getAccountNo())
                && lowerDetails.contains("account")) {

            return "Account number already exists: "
                    + accountInfo.getAccountNo();
        }

        return "Duplicate value already exists.";
    }

    private void mapClientInfo(
            ClientInfoDto dto,
            ClientRegistration client
    ) {

        if (dto == null) {
            return;
        }

        client.setClientName(dto.getClientName());
    }

    private void mapClientDetails(
            ClientDetailsDto dto,
            ClientRegistration client
    ) {

        if (dto == null) {
            return;
        }

        ClientDetails clientDetails = client.getClientDetails();

        if (clientDetails == null) {

            clientDetails = new ClientDetails();

            clientDetails.setClientInfo(client);
            clientDetails.setClientId(client.getClientId());

            client.setClientDetails(clientDetails);
        }

        clientDetails.setFatherName(dto.getFatherName());
        clientDetails.setMotherName(dto.getMotherName());
        clientDetails.setDateOfBirth(dto.getDateOfBirth());
        clientDetails.setGender(dto.getGender());
        clientDetails.setMaritalStatus(dto.getMaritalStatus());
        clientDetails.setSpouseName(dto.getSpouseName());
        clientDetails.setNid(dto.getNid());
    }

    private void mapAddressContact(
            AddressContactDto dto,
            ClientRegistration client
    ) {

        if (dto == null) {
            return;
        }

        AddressContact addressContact = resolveAddressContact(client);

        addressContact.setAddressType(dto.getAddressType());
        addressContact.setCountry(dto.getCountry());
        addressContact.setDivision(dto.getDivision());
        addressContact.setDistrict(dto.getDistrict());
        addressContact.setThana(dto.getThana());
        addressContact.setCity(dto.getCity());
        addressContact.setZipCode(dto.getZipCode());
        addressContact.setMobileNo(dto.getMobileNo());
        addressContact.setEmail(dto.getEmail());
        addressContact.setAddress(dto.getAddress());
    }

    private AddressContact resolveAddressContact(ClientRegistration client) {

        AddressContact existingAddressContact = client.getAddressContact();

        if (existingAddressContact != null) {
            return existingAddressContact;
        }

        AddressContact addressContact = addressContactRepository
                .findByClientId(client.getClientId())
                .orElseGet(AddressContact::new);

        addressContact.setClientInfo(client);
        addressContact.setClientId(client.getClientId());
        client.setAddressContact(addressContact);

        return addressContact;
    }

    private void mapAccountInfo(
            AccountInfoDto dto,
            ClientRegistration client
    ) {

        if (dto == null) {
            return;
        }

        AccountInfo accountInfo = client.getAccountInfo();

        if (accountInfo == null) {

            accountInfo = new AccountInfo();

            accountInfo.setClientInfo(client);
            accountInfo.setClientId(client.getClientId());

            client.setAccountInfo(accountInfo);
        }

        accountInfo.setOfficeCode(dto.getOfficeCode());
        accountInfo.setAccountNo(dto.getAccountNo());
        accountInfo.setAccountTitle(dto.getAccountTitle());
        accountInfo.setAccountOpenDate(dto.getAccountOpenDate());
        accountInfo.setAccountExpiryDate(dto.getAccountExpiryDate());
        accountInfo.setLimitAmount(dto.getLimitAmount());
    }

    private void validateUniqueFields(ClientRegistration client) {

        String clientId = client.getClientId();

        ClientDetails clientDetails = client.getClientDetails();

        if (clientDetails != null
                && StringUtils.hasText(clientDetails.getNid())) {

            clientDetailsRepository.findByNid(clientDetails.getNid())
                    .filter(existing ->
                            !clientId.equals(existing.getClientId()))
                    .ifPresent(existing -> {

                        throw new ConflictException(
                                "NID already exists: "
                                        + clientDetails.getNid()
                        );
                    });
        }

        AddressContact addressContact = client.getAddressContact();

        if (addressContact != null) {

            if (StringUtils.hasText(addressContact.getMobileNo())) {

                addressContactRepository.findByMobileNo(
                                addressContact.getMobileNo()
                        )
                        .filter(existing ->
                                !clientId.equals(existing.getClientId()))
                        .ifPresent(existing -> {

                            throw new ConflictException(
                                    "Mobile number already exists: "
                                            + addressContact.getMobileNo()
                            );
                        });
            }

            if (StringUtils.hasText(addressContact.getEmail())) {

                addressContactRepository.findByEmail(
                                addressContact.getEmail()
                        )
                        .filter(existing ->
                                !clientId.equals(existing.getClientId()))
                        .ifPresent(existing -> {

                            throw new ConflictException(
                                    "Email already exists: "
                                            + addressContact.getEmail()
                            );
                        });
            }
        }

        AccountInfo accountInfo = client.getAccountInfo();

        if (accountInfo != null
                && StringUtils.hasText(accountInfo.getAccountNo())) {

            accountInfoRepository.findByAccountNo(
                            accountInfo.getAccountNo()
                    )
                    .filter(existing ->
                            !clientId.equals(existing.getClientId()))
                    .ifPresent(existing -> {

                        throw new ConflictException(
                                "Account number already exists: "
                                        + accountInfo.getAccountNo()
                        );
                    });
        }
    }

    private String generateClientId() {
        long lastNumericId = clientRepository.findMaxNumericClientId()
                .orElse(FIRST_CLIENT_ID_NUMBER - 1);
        return formatClientId(lastNumericId + 1);
    }

    private String generateUniqueClientId() {
        long lastNumericId = clientRepository.findMaxNumericClientId()
                .orElse(FIRST_CLIENT_ID_NUMBER - 1);

        for (int attempt = 0; attempt < 1000; attempt++) {
            lastNumericId++;
            String candidate = formatClientId(lastNumericId);
            if (!clientRepository.existsByClientId(candidate)) {
                return candidate;
            }
        }

        throw new ConflictException("Unable to generate client ID. Please try again.");
    }

    private String formatClientId(long clientId) {

        return String.format(CLIENT_ID_FORMAT, clientId);
    }
}


