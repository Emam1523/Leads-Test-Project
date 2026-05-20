package com.leads.sandbox.registration;

import com.leads.sandbox.address.query.RetrieveLookUpItem;
import com.leads.sandbox.address.repository.*;
import com.leads.sandbox.registration.repository.*;
import com.leads.sandbox.register.query.*;
import com.leads.sandbox.register.command.UpdateClientAddress.AddressContactDto;
import com.leads.sandbox.register.service.ClientQueryService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Transactional(readOnly = true)
public class ClientQueryServiceImpl implements ClientQueryService {

    private static final String CLIENT_NOT_FOUND_MESSAGE = "Client not found for clientId=%s";
    private final ClientQueryRepository clientQueryRepository;

    private final AddressTypeRepository addressTypeRepository;
    private final CountryNameRepository countryRepository;
    private final DivisionNameRepository divisionRepository;
    private final DistrictNameRepository districtRepository;
    private final ThanaNameRepository thanaRepository;
    private final AddressContactRepository addressContactRepository;
    private final AccountInfoRepository accountInfoRepository;

    public ClientQueryServiceImpl(ClientQueryRepository clientQueryRepository,
                                  AddressTypeRepository addressTypeRepository,
                                  CountryNameRepository countryRepository,
                                  DivisionNameRepository divisionRepository,
                                  DistrictNameRepository districtRepository,
                                  ThanaNameRepository thanaRepository,
                                  AddressContactRepository addressContactRepository,
                                  AccountInfoRepository accountInfoRepository) {
        this.clientQueryRepository = clientQueryRepository;
        this.addressTypeRepository = addressTypeRepository;
        this.countryRepository = countryRepository;
        this.divisionRepository = divisionRepository;
        this.districtRepository = districtRepository;
        this.thanaRepository = thanaRepository;
        this.addressContactRepository = addressContactRepository;
        this.accountInfoRepository = accountInfoRepository;
    }

    @Override
    public RetrieveClient retrieveClientById(String clientId) {
        return toRetrieveClient(findClientByClientId(clientId));
    }

    @Override
    public List<RetrieveClient> retrieveAllClients() {
        return clientQueryRepository.findAll()
                .stream()
                .map(this::toRetrieveClient)
                .toList();
    }

    @Override
    public RetrieveClientAccount getClientAccount(String clientId) {
        ClientRegistration client = findClientByClientId(clientId);
        AccountInfo account = accountInfoRepository.findByClientIdNormalized(clientId)
                .orElse(null);
        return toAccountResponse(client.getClientId(), "Account retrieved successfully", account);
    }

    @Override
    public RetriveClientAddress getClientAddress(String clientId) {
        ClientRegistration client = findClientByClientId(clientId);
        AddressContact address = addressContactRepository.findByClientIdNormalized(clientId)
                .orElse(new AddressContact());

        AddressContactDto dto = new AddressContactDto();
        dto.setAddressType(address.getAddressType());
        dto.setCountry(address.getCountry());
        dto.setDivision(address.getDivision());
        dto.setDistrict(address.getDistrict());
        dto.setThana(address.getThana());
        dto.setCity(address.getCity());
        dto.setZipCode(address.getZipCode());
        dto.setMobileNo(address.getMobileNo());
        dto.setEmail(address.getEmail());
        dto.setAddress(address.getAddress());

        return new RetriveClientAddress(client.getClientId(), "Address retrieved successfully", dto);
    }

    private ClientRegistration findClientByClientId(String clientId) {
        return clientQueryRepository.findByClientId(clientId)
                .orElseThrow(() -> new NoSuchElementException(CLIENT_NOT_FOUND_MESSAGE.formatted(clientId)));
    }

    private RetrieveClient toRetrieveClient(ClientRegistration client) {
        RetrieveClient retrieveClient = new RetrieveClient();

        mapBasicClientDetails(client, retrieveClient);
        mapPersonalDetails(client, retrieveClient);
        mapAddressDetails(client, retrieveClient);
        mapAccountDetails(client, retrieveClient);
        mapAuditDetails(client, retrieveClient);

        return retrieveClient;
    }

    private void mapBasicClientDetails(ClientRegistration client, RetrieveClient retrieveClient) {
        retrieveClient.setClientId(client.getClientId());
        retrieveClient.setClientName(client.getClientName());
    }

    private void mapPersonalDetails(ClientRegistration client, RetrieveClient retrieveClient) {
        ClientDetails details = client.getClientDetails();
        if (details == null) {
            return;
        }

        retrieveClient.setFatherName(details.getFatherName());
        retrieveClient.setMotherName(details.getMotherName());
        retrieveClient.setDateOfBirth(details.getDateOfBirth());
        retrieveClient.setGender(details.getGender());
        retrieveClient.setMaritalStatus(details.getMaritalStatus());
        retrieveClient.setSpouseName(details.getSpouseName());
        retrieveClient.setNid(details.getNid());
    }

    private void mapAddressDetails(ClientRegistration client, RetrieveClient retrieveClient) {
        AddressContact addressContact = client.getAddressContact();
        if (addressContact == null) {
            return;
        }

        retrieveClient.setAddressType(resolveAddressType(addressContact.getAddressType()));
        retrieveClient.setCountry(resolveCountry(addressContact.getCountry()));
        retrieveClient.setDivision(resolveDivision(addressContact.getDivision()));
        retrieveClient.setDistrict(resolveDistrict(addressContact.getDistrict()));
        retrieveClient.setThana(resolveThana(addressContact.getThana()));

        retrieveClient.setCity(addressContact.getCity());
        retrieveClient.setZipCode(addressContact.getZipCode());
        retrieveClient.setMobileNo(addressContact.getMobileNo());
        retrieveClient.setEmail(addressContact.getEmail());
        retrieveClient.setAddress(addressContact.getAddress());
    }

    private RetrieveLookUpItem resolveAddressType(String idOrLabel) {
        return resolveLookup(idOrLabel, addressTypeRepository, AddressType::getType);
    }

    private RetrieveLookUpItem resolveCountry(String idOrLabel) {
        return resolveLookup(idOrLabel, countryRepository, CountryName::getCountryName);
    }

    private RetrieveLookUpItem resolveDivision(String idOrLabel) {
        return resolveLookup(idOrLabel, divisionRepository, DivisionName::getDivision);
    }

    private RetrieveLookUpItem resolveDistrict(String idOrLabel) {
        return resolveLookup(idOrLabel, districtRepository, DistrictName::getDistrictName);
    }

    private RetrieveLookUpItem resolveThana(String idOrLabel) {
        return resolveLookup(idOrLabel, thanaRepository, ThanaName::getThanaName);
    }

    private <T> RetrieveLookUpItem resolveLookup(String rawValue, org.springframework.data.jpa.repository.JpaRepository<T, Long> repository,
                                                 java.util.function.Function<T, String> nameExtractor) {
        if (rawValue == null || rawValue.isBlank()) {
            return null;
        }

        String trimmed = rawValue.trim();
        Long id = toLongOrNull(trimmed);
        String resolvedName = trimmed;

        if (id != null) {
            resolvedName = repository.findById(id)
                    .map(nameExtractor)
                    .orElse(trimmed);
        }

        return new RetrieveLookUpItem(trimmed, resolvedName);
    }

    private Long toLongOrNull(String value) {
        if (value == null) {
            return null;
        }
        try {
            return Long.parseLong(value.trim());
        } catch (NumberFormatException e) {
            return null;
        }
    }

    private void mapAccountDetails(ClientRegistration client, RetrieveClient retrieveClient) {
        AccountInfo accountInfo = client.getAccountInfo();
        if (accountInfo == null) {
            return;
        }

        retrieveClient.setOfficeCode(accountInfo.getOfficeCode());
        retrieveClient.setAccountNo(accountInfo.getAccountNo());
        retrieveClient.setAccountTitle(accountInfo.getAccountTitle());
        retrieveClient.setAccountOpenDate(accountInfo.getAccountOpenDate());
        retrieveClient.setAccountExpiryDate(accountInfo.getAccountExpiryDate());
        retrieveClient.setLimitAmount(accountInfo.getLimitAmount());
    }

    private void mapAuditDetails(ClientRegistration client, RetrieveClient retrieveClient) {
        retrieveClient.setCreatedAt(client.getCreatedAt());
        retrieveClient.setUpdatedAt(client.getUpdatedAt());
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
}
