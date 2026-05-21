package com.leads.sandbox.registration;

import com.leads.sandbox.address.query.RetrieveLookUpItem;
import com.leads.sandbox.address.query.RetrieveLookup;
import com.leads.sandbox.address.service.LookupService;
import com.leads.sandbox.customException.ResourceNotFoundException;
import com.leads.sandbox.register.command.UpdateClientAddress;
import com.leads.sandbox.register.query.RetrieveClient;
import com.leads.sandbox.register.query.RetrieveClientAccount;
import com.leads.sandbox.register.query.RetrieveClientAddress;
import com.leads.sandbox.register.service.ClientQueryService;
import com.leads.sandbox.registration.repository.ClientRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class ClientQueryServiceImpl implements ClientQueryService {

    private static final String CLIENT_NOT_FOUND_MESSAGE = "Client not found for clientId=%s";

    private final ClientRepository clientRepository;
    private final LookupService lookupService;

    public ClientQueryServiceImpl(ClientRepository clientRepository, LookupService lookupService) {
        this.clientRepository = clientRepository;
        this.lookupService = lookupService;
    }

    @Override
    public RetrieveClient retrieveClientById(String clientId) {
        Map<String, Object> baseRow = firstRow(clientRepository.getClientById(clientId));
        if (baseRow == null) {
            throw new ResourceNotFoundException(CLIENT_NOT_FOUND_MESSAGE.formatted(clientId));
        }

        RetrieveClient retrieveClient = toRetrieveClient(baseRow);

        Map<String, Object> detailsRow = firstRow(clientRepository.getClientDetails(clientId));
        if (detailsRow != null) {
            applyDetails(detailsRow, retrieveClient);
        }

        Map<String, Object> addressRow = firstRow(clientRepository.getClientAddress(clientId));
        if (addressRow != null) {
            applyAddress(addressRow, retrieveClient);
        }

        Map<String, Object> accountRow = firstRow(clientRepository.getClientAccount(clientId));
        if (accountRow != null) {
            applyAccount(accountRow, retrieveClient);
        }

        return retrieveClient;
    }

    @Override
    public List<RetrieveClient> retrieveAllClients() {
        return extractRows(clientRepository.getAllClients())
                .stream()
                .map(this::toRetrieveClient)
                .toList();
    }

    @Override
    public RetrieveClientAccount getClientAccount(String clientId) {
        ensureClientExists(clientId);
        Map<String, Object> row = firstRow(clientRepository.getClientAccount(clientId));
        return toAccountResponse(clientId, row);
    }

    @Override
    public RetrieveClientAddress getClientAddress(String clientId) {
        ensureClientExists(clientId);
        Map<String, Object> row = firstRow(clientRepository.getClientAddress(clientId));

        UpdateClientAddress.AddressContactDto dto = new UpdateClientAddress.AddressContactDto();
        if (row != null) {
            dto.setAddressType(getString(row, "ADDRESS_TYPE_ID", "ADDRESS_TYPE"));
            dto.setCountry(getString(row, "COUNTRY_ID", "COUNTRY"));
            dto.setDivision(getString(row, "DIVISION_ID", "DIVISION"));
            dto.setDistrict(getString(row, "DISTRICT_ID", "DISTRICT"));
            dto.setThana(getString(row, "THANA_ID", "THANA"));
            dto.setCity(getString(row, "CITY"));
            dto.setZipCode(getString(row, "ZIP", "ZIP_CODE"));
            dto.setMobileNo(getString(row, "MOBILE", "MOBILE_NO"));
            dto.setEmail(getString(row, "EMAIL"));
            dto.setAddress(getString(row, "ADDRESS", "FULL_ADDRESS"));
        }

        return new RetrieveClientAddress(clientId, "Address retrieved successfully", dto);
    }

    private void ensureClientExists(String clientId) {
        if (firstRow(clientRepository.getClientById(clientId)) == null) {
            throw new ResourceNotFoundException(CLIENT_NOT_FOUND_MESSAGE.formatted(clientId));
        }
    }

    private RetrieveClient toRetrieveClient(Map<String, Object> row) {
        RetrieveClient client = new RetrieveClient();

        client.setClientId(getString(row, "CLIENT_ID", "P_CLIENT_ID"));
        client.setClientName(getString(row, "CLIENT_NAME", "P_CLIENT_NAME", "NAME"));

        applyDetails(row, client);
        applyAddress(row, client);
        applyAccount(row, client);

        client.setCreatedAt(toLocalDateTime(getValue(row, "CREATED_AT")));
        client.setUpdatedAt(toLocalDateTime(getValue(row, "UPDATED_AT")));

        return client;
    }

    private void applyDetails(Map<String, Object> row, RetrieveClient client) {
        client.setFatherName(getString(row, "FATHER_NAME", "CLIENT_FATHER_NAME"));
        client.setMotherName(getString(row, "MOTHER_NAME", "CLIENT_MOTHER_NAME"));
        client.setDateOfBirth(formatDate(getValue(row, "DATE_OF_BIRTH", "CLIENT_DATE_OF_BIRTH", "DOB")));
        client.setGender(getString(row, "GENDER", "CLIENT_GENDER"));
        client.setMaritalStatus(getString(row, "MARITAL_STATUS", "CLIENT_MARITAL_STATUS"));
        client.setSpouseName(getString(row, "SPOUSE_NAME", "CLIENT_SPOUSE_NAME"));
        client.setNid(getString(row, "NID", "CLIENT_NID"));
    }

    private void applyAddress(Map<String, Object> row, RetrieveClient client) {
        client.setAddressType(toLookupWithNameResolution(row,
                new String[]{"ADDRESS_TYPE_ID", "ADDRESS_TYPE"},
                new String[]{"ADDRESS_TYPE_NAME", "ADDRESS_TYPE"},
                lookupService.getAddressTypes()));
        client.setCountry(toLookupWithNameResolution(row,
                new String[]{"COUNTRY_ID", "COUNTRY"},
                new String[]{"COUNTRY_NAME", "COUNTRY"},
                lookupService.getCountries()));
        
        // For hierarchical lookups, resolve division based on country if available
        String countryCodeStr = getString(row, "COUNTRY_ID", "COUNTRY");
        List<RetrieveLookup> divisions = !StringUtils.hasText(countryCodeStr) ? 
                Collections.emptyList() : lookupService.getDivisions(countryCodeStr);
        client.setDivision(toLookupWithNameResolution(row,
                new String[]{"DIVISION_ID", "DIVISION"},
                new String[]{"DIVISION_NAME", "DIVISION"},
                divisions));
        
        // For hierarchical lookups, resolve districts based on division if available
        String divisionCodeStr = getString(row, "DIVISION_ID", "DIVISION");
        List<RetrieveLookup> districts = !StringUtils.hasText(divisionCodeStr) ? 
                Collections.emptyList() : lookupService.getDistricts(divisionCodeStr);
        client.setDistrict(toLookupWithNameResolution(row,
                new String[]{"DISTRICT_ID", "DISTRICT"},
                new String[]{"DISTRICT_NAME", "DISTRICT"},
                districts));
        
        // For hierarchical lookups, resolve thanas based on district if available
        String districtCodeStr = getString(row, "DISTRICT_ID", "DISTRICT");
        List<RetrieveLookup> thanas = !StringUtils.hasText(districtCodeStr) ? 
                Collections.emptyList() : lookupService.getThanas(districtCodeStr);
        client.setThana(toLookupWithNameResolution(row,
                new String[]{"THANA_ID", "THANA"},
                new String[]{"THANA_NAME", "THANA"},
                thanas));

        client.setCity(getString(row, "CITY"));
        client.setZipCode(getString(row, "ZIP", "ZIP_CODE"));
        client.setMobileNo(getString(row, "MOBILE", "MOBILE_NO"));
        client.setEmail(getString(row, "EMAIL"));
        client.setAddress(getString(row, "ADDRESS", "ADDRESS"));
    }

    private void applyAccount(Map<String, Object> row, RetrieveClient client) {
        client.setOfficeCode(getString(row, "OFFICE_CODE"));
        client.setAccountNo(getString(row, "ACCOUNT_NO", "ACCOUNT_NUMBER"));
        client.setAccountTitle(getString(row, "ACCOUNT_TITLE", "ACCOUNT_TYPE"));
        client.setAccountOpenDate(formatDate(getValue(row, "ACCOUNT_OPEN_DATE", "OPEN_DATE")));
        client.setAccountExpiryDate(formatDate(getValue(row, "ACCOUNT_EXPIRY_DATE", "EXPIRY_DATE")));
        client.setLimitAmount(toDouble(getValue(row, "LIMIT_AMOUNT", "LIMIT")));
    }

    private RetrieveLookUpItem toLookupWithNameResolution(Map<String, Object> row, String[] codeKeys, String[] nameKeys, List<RetrieveLookup> lookupList) {
        String code = getString(row, codeKeys);
        String name = getString(row, nameKeys);

        if (!StringUtils.hasText(code) && !StringUtils.hasText(name)) {
            return null;
        }

        if (!StringUtils.hasText(code)) {
            code = name;
        }

        // Try to find the label from the lookup list
        final String finalCode = code;
        if (!StringUtils.hasText(name) || name.equals(code)) {
            Optional<RetrieveLookup> lookupItem = lookupList.stream()
                    .filter(item -> {
                        if (item.getKey() == null) return false;
                        return finalCode.equals(item.getKey()) || finalCode.equals(String.valueOf(item.getId()));
                    })
                    .findFirst();
            if (lookupItem.isPresent()) {
                name = lookupItem.get().getLabel();
            } else {
                name = code;
            }
        }

        return new RetrieveLookUpItem(code, name);
    }

    private RetrieveClientAccount toAccountResponse(String clientId, Map<String, Object> row) {
        RetrieveClientAccount response = new RetrieveClientAccount(clientId, "Account retrieved successfully");
        if (row != null) {
            response.setAccountNo(getString(row, "ACCOUNT_NO", "ACCOUNT_NUMBER"));
            response.setAccountTitle(getString(row, "ACCOUNT_TITLE", "ACCOUNT_TYPE"));
            response.setOfficeCode(getString(row, "OFFICE_CODE"));
            response.setAccountOpenDate(toLocalDate(getValue(row, "ACCOUNT_OPEN_DATE", "OPEN_DATE")));
            response.setAccountExpiryDate(toLocalDate(getValue(row, "ACCOUNT_EXPIRY_DATE", "EXPIRY_DATE")));
            response.setLimitAmount(toDouble(getValue(row, "LIMIT_AMOUNT", "LIMIT")));
        }
        return response;
    }

    private List<Map<String, Object>> extractRows(Map<String, Object> result) {
        if (result == null) {
            return Collections.emptyList();
        }

        for (Object value : result.values()) {
            if (value instanceof List<?> list && !list.isEmpty()) {
                Object first = list.iterator().next();
                if (!(first instanceof Map)) {
                    continue;
                }
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> rows = (List<Map<String, Object>>) list;
                return rows;
            }
        }

        return Collections.emptyList();
    }

    private Map<String, Object> firstRow(Map<String, Object> result) {
        List<Map<String, Object>> rows = extractRows(result);
        return rows.isEmpty() ? null : rows.iterator().next();
    }


    private Object getValue(Map<String, Object> row, String... keys) {
        if (row == null || keys == null) {
            return null;
        }

        for (String key : keys) {
            if (row.containsKey(key)) {
                return row.get(key);
            }
        }

        for (Map.Entry<String, Object> entry : row.entrySet()) {
            for (String key : keys) {
                if (entry.getKey() != null && entry.getKey().equalsIgnoreCase(key)) {
                    return entry.getValue();
                }
            }
        }

        return null;
    }

    private String getString(Map<String, Object> row, String... keys) {
        Object value = getValue(row, keys);
        return value == null ? null : value.toString();
    }


    private String formatDate(Object value) {
        if (value == null) {
            return null;
        }
        if (value instanceof LocalDate localDate) {
            return localDate.toString();
        }
        if (value instanceof java.sql.Date sqlDate) {
            return sqlDate.toLocalDate().toString();
        }
        if (value instanceof java.util.Date utilDate) {
            return new java.sql.Date(utilDate.getTime()).toLocalDate().toString();
        }
        return value.toString();
    }

    private LocalDate toLocalDate(Object value) {
        if (value == null) {
            return null;
        }
        if (value instanceof LocalDate localDate) {
            return localDate;
        }
        if (value instanceof java.sql.Date sqlDate) {
            return sqlDate.toLocalDate();
        }
        if (value instanceof java.util.Date utilDate) {
            return new java.sql.Date(utilDate.getTime()).toLocalDate();
        }
        if (value instanceof String text && StringUtils.hasText(text)) {
            try {
                return LocalDate.parse(text.trim());
            } catch (Exception ignored) {
                return null;
            }
        }
        return null;
    }

    private LocalDateTime toLocalDateTime(Object value) {
        if (value == null) {
            return null;
        }
        if (value instanceof LocalDateTime localDateTime) {
            return localDateTime;
        }
        if (value instanceof java.sql.Timestamp timestamp) {
            return timestamp.toLocalDateTime();
        }
        if (value instanceof java.util.Date utilDate) {
            return new java.sql.Timestamp(utilDate.getTime()).toLocalDateTime();
        }
        if (value instanceof String text && StringUtils.hasText(text)) {
            try {
                return LocalDateTime.parse(text.trim());
            } catch (Exception ignored) {
                return null;
            }
        }
        return null;
    }

    private Double toDouble(Object value) {
        if (value == null) {
            return null;
        }
        if (value instanceof Number number) {
            return number.doubleValue();
        }
        if (value instanceof String text && StringUtils.hasText(text)) {
            try {
                return Double.parseDouble(text.trim());
            } catch (NumberFormatException ignored) {
                return null;
            }
        }
        return null;
    }
}
