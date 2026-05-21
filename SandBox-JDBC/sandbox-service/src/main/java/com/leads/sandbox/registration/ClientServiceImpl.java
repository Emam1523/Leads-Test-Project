package com.leads.sandbox.registration;

import com.leads.sandbox.customException.BadRequestException;
import com.leads.sandbox.customException.ConflictException;
import com.leads.sandbox.customException.ResourceNotFoundException;
import com.leads.sandbox.register.command.DeleteAccount;
import com.leads.sandbox.register.command.DeleteAddress;
import com.leads.sandbox.register.command.DeleteClient;
import com.leads.sandbox.register.command.GenerateClientId;
import com.leads.sandbox.register.command.RegisterClient;
import com.leads.sandbox.register.command.UpdateClientAccount;
import com.leads.sandbox.register.command.UpdateClientAddress;
import com.leads.sandbox.register.command.UpdateClientInfo;
import com.leads.sandbox.register.query.RetrieveClientAccount;
import com.leads.sandbox.register.query.RetrieveClientId;
import com.leads.sandbox.register.query.RetrieveClientUpdate;
import com.leads.sandbox.register.query.RetrieveClientAddress;
import com.leads.sandbox.register.service.ClientCommandService;
import com.leads.sandbox.registration.repository.ClientRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
public class ClientServiceImpl implements ClientCommandService {

    private static final String CLIENT_NOT_FOUND_MESSAGE =
            "Client not found with ID: %s";
    private static final Logger logger =
            LoggerFactory.getLogger(ClientServiceImpl.class);
    private static final int MAX_CLIENT_ID_LENGTH = 20;
    private static final DateTimeFormatter CLIENT_ID_SUFFIX_FORMATTER =
            DateTimeFormatter.ofPattern("MMddHHmmss");

    private final ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public RetrieveClientId process(GenerateClientId request) {

        String clientName =
                request == null ? null : request.getClientName();

        if (!StringUtils.hasText(clientName)) {
            throw new BadRequestException("Client name is required");
        }

        String clientId =
                requestGeneratedClientId(clientName);

        return new RetrieveClientId(clientId);
    }

    @Override
    @Transactional
    public RetrieveClientId process(RegisterClient request) {

        if (request == null || request.getClientInfo() == null) {
            throw new BadRequestException("Client info is required");
        }

        String clientName =
                request.getClientInfo().getClientName();

        if (!StringUtils.hasText(clientName)) {
            throw new BadRequestException("Client name is required");
        }

        String clientId =
                request.getClientInfo().getClientId();

        if (!StringUtils.hasText(clientId)) {
            clientId = requestGeneratedClientId(clientName);
        }

        RegisterClient.ClientDetailsDto details =
                request.getClientDetails();

        if (details == null) {
            throw new BadRequestException("Client details are required");
        }

        clientRepository.saveClientDetails(
                clientId,
                details.getFatherName(),
                details.getMotherName(),
                toSqlDate(details.getDateOfBirth()),
                details.getGender(),
                details.getMaritalStatus(),
                details.getSpouseName(),
                toLong(details.getNid())
        );

        RegisterClient.AddressContactDto address =
                request.getAddressContact();

        if (address == null) {
            throw new BadRequestException("Address is required");
        }

        clientRepository.saveClientAddress(
                clientId,
                address.getAddressType(),
                address.getCountry(),
                address.getDivision(),
                address.getDistrict(),
                address.getThana(),
                address.getCity(),
                address.getZipCode(),
                address.getMobileNo(),
                address.getEmail(),
                address.getAddress()
        );

        RegisterClient.AccountInfoDto account =
                request.getAccountInfo();

        if (account == null) {
            throw new BadRequestException("Account info is required");
        }

        clientRepository.saveClientAccount(
                clientId,
                account.getOfficeCode(),
                account.getAccountNo(),
                account.getAccountTitle(),
                toSqlDate(account.getAccountOpenDate()),
                toSqlDate(account.getAccountExpiryDate()),
                toDouble(account.getLimitAmount())
        );

        return new RetrieveClientId(clientId);
    }

    @Override
    @Transactional
    public RetrieveClientUpdate updateClient(
            String clientId,
            UpdateClientInfo request
    ) {

        ensureClientExists(clientId);

        if (request == null) {
            throw new BadRequestException("Request body is required");
        }

        if (request.getClientInfo() != null &&
                StringUtils.hasText(
                        request.getClientInfo().getClientName())) {

            clientRepository.updateClientInfo(
                    clientId,
                    request.getClientInfo().getClientName()
            );
        }

        if (request.getClientDetails() != null) {

            Map<String, Object> current =
                    firstRow(clientRepository.getClientDetails(clientId));

            if (current == null) {
                saveClientDetails(clientId, request.getClientDetails());
            } else {
                updateClientDetails(
                        clientId,
                        request.getClientDetails(),
                        current
                );
            }
        }

        if (request.getAddressContact() != null) {

            Map<String, Object> current =
                    firstRow(clientRepository.getClientAddress(clientId));

            if (current == null) {
                saveClientAddress(clientId, request.getAddressContact());
            } else {
                updateClientAddress(
                        clientId,
                        request.getAddressContact(),
                        current
                );
            }
        }

        if (request.getAccountInfo() != null) {

            Map<String, Object> current =

                    firstRow(clientRepository.getClientAccount(clientId));

            if (current == null) {
                saveClientAccount(clientId, request.getAccountInfo());
            } else {
                updateClientAccount(
                        clientId,
                        request.getAccountInfo(),
                        current
                );
            }
        }

        return new RetrieveClientUpdate(
                clientId,
                "Client Updated Successfully"
        );
    }

    @Override
    @Transactional
    public DeleteClient deleteClient(String clientId) {

        ensureClientExists(clientId);

        clientRepository.deleteClient(clientId);

        return new DeleteClient(
                clientId,
                "Client deleted successfully"
        );
    }

    @Override
    @Transactional
    public RetrieveClientAddress updateClientAddress(
            String clientId,
            UpdateClientAddress request
    ) {

        ensureClientExists(clientId);

        if (request == null ||
                request.getAddressContact() == null) {

            throw new BadRequestException(
                    "Address payload is required"
            );
        }

        Map<String, Object> current =
                firstRow(clientRepository.getClientAddress(clientId));

        UpdateClientAddress.AddressContactDto merged;

        if (current == null) {
            merged = request.getAddressContact();
            saveClientAddress(clientId, merged);
        } else {
            merged = mergeAddressRequest(
                    request.getAddressContact(),
                    current
            );

            updateClientAddress(
                    clientId,
                    merged,
                    current
            );
        }

        return new RetrieveClientAddress(
                clientId,
                "Address updated successfully",
                merged
        );
    }

    @Override
    @Transactional
    public RetrieveClientAccount updateClientAccount(
            String clientId,
            UpdateClientAccount request
    ) {

        ensureClientExists(clientId);

        if (request == null) {
            throw new BadRequestException(
                    "Account payload is required"
            );
        }

        Map<String, Object> current =
                firstRow(clientRepository.getClientAccount(clientId));

        if (current == null) {
            saveClientAccount(clientId, request);

            Map<String, Object> saved =
                    firstRow(clientRepository.getClientAccount(clientId));

            if (saved != null) {
                return buildAccountResponseFromRow(clientId, saved);
            }

            return buildAccountResponseFromRequest(clientId, request);
        }

        updateClientAccount(clientId, request, current);

        Map<String, Object> updated =
                firstRow(clientRepository.getClientAccount(clientId));

        if (updated == null) {
            return buildAccountResponseFromRequest(clientId, request);
        }

        return buildAccountResponseFromRow(clientId, updated);
    }

    @Override
    @Transactional
    public DeleteAddress deleteAddress(String clientId) {

        ensureClientExists(clientId);

        clientRepository.deleteClientAddress(clientId);

        return new DeleteAddress(
                clientId,
                "Address deleted successfully"
        );
    }

    @Override
    @Transactional
    public DeleteAccount deleteAccount(String clientId) {

        ensureClientExists(clientId);

        clientRepository.deleteClientAccount(clientId);

        return new DeleteAccount(
                clientId,
                "Account deleted successfully"
        );
    }

    private void updateClientDetails(
            String clientId,
            RegisterClient.ClientDetailsDto dto,
            Map<String, Object> current
    ) {

        clientRepository.updateClientDetails(
                clientId,
                coalesceText(dto.getFatherName(),
                        getString(current, "FATHER_NAME")),
                coalesceText(dto.getMotherName(),
                        getString(current, "MOTHER_NAME")),
                toSqlDate(
                        coalesce(
                                toLocalDate(dto.getDateOfBirth()),
                                toLocalDate(getValue(current, "DATE_OF_BIRTH"))
                        )
                ),
                coalesceText(dto.getGender(),
                        getString(current, "GENDER")),
                coalesceText(dto.getMaritalStatus(),
                        getString(current, "MARITAL_STATUS")),
                coalesceText(dto.getSpouseName(),
                        getString(current, "SPOUSE_NAME")),
                coalesce(
                        toLong(dto.getNid()),
                        toLong(getString(current, "NID"))
                )
        );
    }

    private void saveClientDetails(
            String clientId,
            RegisterClient.ClientDetailsDto dto
    ) {

        clientRepository.saveClientDetails(
                clientId,
                dto.getFatherName(),
                dto.getMotherName(),
                toSqlDate(dto.getDateOfBirth()),
                dto.getGender(),
                dto.getMaritalStatus(),
                dto.getSpouseName(),
                toLong(dto.getNid())
        );
    }

    private void updateClientAddress(
            String clientId,
            RegisterClient.AddressContactDto dto,
            Map<String, Object> current
    ) {

        clientRepository.updateClientAddress(
                clientId,
                coalesceText(dto.getAddressType(),
                        getString(current, "ADDRESS_TYPE")),
                coalesceText(dto.getCountry(),
                        getString(current, "COUNTRY")),
                coalesceText(dto.getDivision(),
                        getString(current, "DIVISION")),
                coalesceText(dto.getDistrict(),
                        getString(current, "DISTRICT")),
                coalesceText(dto.getThana(),
                        getString(current, "THANA")),
                coalesceText(dto.getCity(),
                        getString(current, "CITY")),
                coalesceText(dto.getZipCode(),
                        getString(current, "ZIP_CODE")),
                coalesceText(dto.getMobileNo(),
                        getString(current, "MOBILE_NO")),
                coalesceText(dto.getEmail(),
                        getString(current, "EMAIL")),
                coalesceText(dto.getAddress(),
                        getString(current, "ADDRESS"))
        );
    }

    private void saveClientAddress(
            String clientId,
            RegisterClient.AddressContactDto dto
    ) {

        clientRepository.saveClientAddress(
                clientId,
                dto.getAddressType(),
                dto.getCountry(),
                dto.getDivision(),
                dto.getDistrict(),
                dto.getThana(),
                dto.getCity(),
                dto.getZipCode(),
                dto.getMobileNo(),
                dto.getEmail(),
                dto.getAddress()
        );
    }

    private void saveClientAddress(
            String clientId,
            UpdateClientAddress.AddressContactDto dto
    ) {

        clientRepository.saveClientAddress(
                clientId,
                dto.getAddressType(),
                dto.getCountry(),
                dto.getDivision(),
                dto.getDistrict(),
                dto.getThana(),
                dto.getCity(),
                dto.getZipCode(),
                dto.getMobileNo(),
                dto.getEmail(),
                dto.getAddress()
        );
    }

    private void updateClientAddress(
            String clientId,
            UpdateClientAddress.AddressContactDto dto,
            Map<String, Object> current
    ) {

        clientRepository.updateClientAddress(
                clientId,
                coalesceText(dto.getAddressType(),
                        getString(current, "ADDRESS_TYPE")),
                coalesceText(dto.getCountry(),
                        getString(current, "COUNTRY")),
                coalesceText(dto.getDivision(),
                        getString(current, "DIVISION")),
                coalesceText(dto.getDistrict(),
                        getString(current, "DISTRICT")),
                coalesceText(dto.getThana(),
                        getString(current, "THANA")),
                coalesceText(dto.getCity(),
                        getString(current, "CITY")),
                coalesceText(dto.getZipCode(),
                        getString(current, "ZIP_CODE")),
                coalesceText(dto.getMobileNo(),
                        getString(current, "MOBILE_NO")),
                coalesceText(dto.getEmail(),
                        getString(current, "EMAIL")),
                coalesceText(dto.getAddress(),
                        getString(current, "ADDRESS"))
        );
    }

    private void updateClientAccount(
            String clientId,
            RegisterClient.AccountInfoDto dto,
            Map<String, Object> current
    ) {

        clientRepository.updateClientAccount(
                clientId,
                coalesceText(dto.getOfficeCode(),
                        getString(current, "OFFICE_CODE")),
                coalesceText(dto.getAccountNo(),
                        getString(current, "ACCOUNT_NO")),
                coalesceText(dto.getAccountTitle(),
                        getString(current, "ACCOUNT_TITLE")),
                toSqlDate(
                        coalesce(
                                toLocalDate(dto.getAccountOpenDate()),
                                toLocalDate(getValue(current, "ACCOUNT_OPEN_DATE"))
                        )
                ),
                toSqlDate(
                        coalesce(
                                toLocalDate(dto.getAccountExpiryDate()),
                                toLocalDate(getValue(current, "ACCOUNT_EXPIRY_DATE"))
                        )
                ),
                coalesce(
                        toDouble(dto.getLimitAmount()),
                        toDouble(getValue(current, "LIMIT_AMOUNT"))
                )
        );
    }

    private UpdateClientAddress.AddressContactDto mergeAddressRequest(
            UpdateClientAddress.AddressContactDto dto,
            Map<String, Object> current
    ) {

        UpdateClientAddress.AddressContactDto merged =
                new UpdateClientAddress.AddressContactDto();

        merged.setAddressType(
                coalesceText(dto.getAddressType(),
                        getString(current, "ADDRESS_TYPE"))
        );
        merged.setCountry(
                coalesceText(dto.getCountry(),
                        getString(current, "COUNTRY"))
        );
        merged.setDivision(
                coalesceText(dto.getDivision(),
                        getString(current, "DIVISION"))
        );
        merged.setDistrict(
                coalesceText(dto.getDistrict(),
                        getString(current, "DISTRICT"))
        );
        merged.setThana(
                coalesceText(dto.getThana(),
                        getString(current, "THANA"))
        );
        merged.setCity(
                coalesceText(dto.getCity(),
                        getString(current, "CITY"))
        );
        merged.setZipCode(
                coalesceText(dto.getZipCode(),
                        getString(current, "ZIP_CODE"))
        );
        merged.setMobileNo(
                coalesceText(dto.getMobileNo(),
                        getString(current, "MOBILE_NO"))
        );
        merged.setEmail(
                coalesceText(dto.getEmail(),
                        getString(current, "EMAIL"))
        );
        merged.setAddress(
                coalesceText(dto.getAddress(),
                        getString(current, "ADDRESS"))
        );
        return merged;
    }

    private void updateClientAccount(
            String clientId,
            UpdateClientAccount dto,
            Map<String, Object> current
    ) {

        clientRepository.updateClientAccount(
                clientId,
                coalesceText(dto.getOfficeCode(),
                        getString(current, "OFFICE_CODE")),
                coalesceText(dto.getAccountNo(),
                        getString(current, "ACCOUNT_NO")),
                coalesceText(dto.getAccountTitle(),
                        getString(current, "ACCOUNT_TITLE")),
                toSqlDate(
                        coalesce(
                                toLocalDate(dto.getAccountOpenDate()),
                                toLocalDate(getValue(current, "ACCOUNT_OPEN_DATE"))
                        )
                ),
                toSqlDate(
                        coalesce(
                                toLocalDate(dto.getAccountExpiryDate()),
                                toLocalDate(getValue(current, "ACCOUNT_EXPIRY_DATE"))
                        )
                ),
                coalesce(
                        toDouble(dto.getLimitAmount()),
                        toDouble(getValue(current, "LIMIT_AMOUNT"))
                )
        );
    }

    private void saveClientAccount(
            String clientId,
            UpdateClientAccount dto
    ) {

        clientRepository.saveClientAccount(
                clientId,
                dto.getOfficeCode(),
                dto.getAccountNo(),
                dto.getAccountTitle(),
                toSqlDate(dto.getAccountOpenDate()),
                toSqlDate(dto.getAccountExpiryDate()),
                toDouble(dto.getLimitAmount())
        );
    }

    private void saveClientAccount(
            String clientId,
            RegisterClient.AccountInfoDto dto
    ) {

        clientRepository.saveClientAccount(
                clientId,
                dto.getOfficeCode(),
                dto.getAccountNo(),
                dto.getAccountTitle(),
                toSqlDate(dto.getAccountOpenDate()),
                toSqlDate(dto.getAccountExpiryDate()),
                toDouble(dto.getLimitAmount())
        );
    }

    private RetrieveClientAccount buildAccountResponseFromRow(
            String clientId,
            Map<String, Object> row
    ) {

        RetrieveClientAccount response =
                new RetrieveClientAccount(
                        clientId,
                        "Account updated successfully"
                );

        response.setOfficeCode(getString(row, "OFFICE_CODE"));
        response.setAccountNo(getString(row, "ACCOUNT_NO"));
        response.setAccountTitle(getString(row, "ACCOUNT_TITLE"));
        response.setAccountOpenDate(
                toLocalDate(getValue(row, "ACCOUNT_OPEN_DATE"))
        );
        response.setAccountExpiryDate(
                toLocalDate(getValue(row, "ACCOUNT_EXPIRY_DATE"))
        );
        response.setLimitAmount(
                toDouble(getValue(row, "LIMIT_AMOUNT"))
        );

        return response;
    }

    private RetrieveClientAccount buildAccountResponseFromRequest(
            String clientId,
            UpdateClientAccount request
    ) {

        RetrieveClientAccount response =
                new RetrieveClientAccount(
                        clientId,
                        "Account updated successfully"
                );

        response.setOfficeCode(request.getOfficeCode());
        response.setAccountNo(request.getAccountNo());
        response.setAccountTitle(request.getAccountTitle());
        response.setAccountOpenDate(request.getAccountOpenDate());
        response.setAccountExpiryDate(request.getAccountExpiryDate());
        response.setLimitAmount(request.getLimitAmount());

        return response;
    }

    private void ensureClientExists(String clientId) {

        if (firstRow(clientRepository.getClientById(clientId)) == null) {
            throw new ResourceNotFoundException(
                    CLIENT_NOT_FOUND_MESSAGE.formatted(clientId)
            );
        }
    }

    private String requestGeneratedClientId(String clientName) {
        for (int attempt = 0; attempt < 5; attempt++) {
            try {
                String clientId = normalizeClientId(
                        resolveGeneratedClientId(
                                clientRepository.generateClientId(clientName)
                        )
                );
                if (StringUtils.hasText(clientId)) {
                    return clientId;
                }
            } catch (Exception ex) {
                if (!isUniqueConstraintViolation(ex)) {
                    logger.error("Failed to generate client ID for clientName={}", clientName, ex);
                    throw ex;
                }
                logger.warn(
                        "Duplicate client ID returned by Oracle package for clientName={} on attempt {}",
                        clientName,
                        attempt + 1
                );
            }
        }

        String fallbackClientId = generateFallbackClientId(clientName);
        logger.warn(
                "Oracle package did not produce a usable client ID for clientName={}; using fallback clientId={}",
                clientName,
                fallbackClientId
        );
        return fallbackClientId;
    }

    private String resolveGeneratedClientId(
            Map<String, Object> result
    ) {

        String clientId =
                getString(result, "P_CLIENT_ID");

        if (StringUtils.hasText(clientId)) {
            return clientId;
        }

        Map<String, Object> row =
                firstRow(result);

        if (row != null) {

            clientId =
                    getString(row, "CLIENT_ID");

            if (StringUtils.hasText(clientId)) {
                return clientId;
            }
        }

        return null;
    }

    private boolean isUniqueConstraintViolation(Throwable ex) {
        Throwable current = ex;
        while (current != null) {
            String message = current.getMessage();
            if (message != null && message.toUpperCase(Locale.ROOT).contains("ORA-00001")) {
                return true;
            }
            current = current.getCause();
        }
        return false;
    }

    private String normalizeClientId(String clientId) {
        if (!StringUtils.hasText(clientId)) {
            return null;
        }

        String normalized = clientId.trim().replaceAll("\\s+", "");
        if (normalized.length() <= MAX_CLIENT_ID_LENGTH) {
            return normalized;
        }

        logger.warn("Generated client ID exceeded {} characters; truncating value {}", MAX_CLIENT_ID_LENGTH, normalized);
        return normalized.substring(0, MAX_CLIENT_ID_LENGTH);
    }

    private String generateFallbackClientId(String clientName) {
        String base = clientName == null
                ? ""
                : clientName.toUpperCase(Locale.ROOT).replaceAll("[^A-Z0-9]", "");
        if (!StringUtils.hasText(base)) {
            base = "CLIENT";
        }

        String suffix = LocalDateTime.now().format(CLIENT_ID_SUFFIX_FORMATTER);
        int baseLength = Math.max(1, MAX_CLIENT_ID_LENGTH - suffix.length());
        String candidate = base.substring(0, Math.min(base.length(), baseLength)) + suffix;

        if (!clientExists(candidate)) {
            return candidate;
        }

        for (int i = 0; i < 100; i++) {
            String numberedSuffix =
                    suffix.substring(Math.min(2, suffix.length())) + String.format(Locale.ROOT, "%02d", i);
            int candidateBaseLength = Math.max(1, MAX_CLIENT_ID_LENGTH - numberedSuffix.length());
            String numberedCandidate =
                    base.substring(0, Math.min(base.length(), candidateBaseLength)) + numberedSuffix;
            if (!clientExists(numberedCandidate)) {
                return numberedCandidate;
            }
        }

        throw new ConflictException("Unable to generate a unique client ID. Please try again.");
    }

    private boolean clientExists(String clientId) {
        return firstRow(clientRepository.getClientById(clientId)) != null;
    }

    private Map<String, Object> firstRow(
            Map<String, Object> result
    ) {

        List<Map<String, Object>> rows =
                extractRows(result);

        return rows.isEmpty() ? null : rows.get(0);
    }

    private List<Map<String, Object>> extractRows(
            Map<String, Object> result
    ) {

        if (result == null) {
            return Collections.emptyList();
        }

        for (Object value : result.values()) {

            if (value instanceof List<?> list &&
                    !list.isEmpty()) {

                Object first = list.get(0);

                if (first instanceof Map) {

                    @SuppressWarnings("unchecked")
                    List<Map<String, Object>> rows =
                            (List<Map<String, Object>>) list;

                    return rows;
                }
            }
        }

        return Collections.emptyList();
    }

    private Object getValue(
            Map<String, Object> row,
            String key
    ) {

        if (row == null || key == null) {
            return null;
        }

        for (Map.Entry<String, Object> entry : row.entrySet()) {

            if (entry.getKey().equalsIgnoreCase(key)) {
                return entry.getValue();
            }
        }

        return null;
    }

    private String getString(
            Map<String, Object> row,
            String key
    ) {

        Object value = getValue(row, key);

        return value == null ? null : value.toString();
    }

    private String coalesceText(
            String primary,
            String fallback
    ) {

        return StringUtils.hasText(primary)
                ? primary
                : fallback;
    }

    private <T> T coalesce(T primary, T fallback) {
        return primary != null ? primary : fallback;
    }

    private Date toSqlDate(LocalDate value) {
        return value == null ? null : Date.valueOf(value);
    }

    private LocalDate toLocalDate(Object value) {

        if (value == null) {
            return null;
        }

        if (value instanceof LocalDate localDate) {
            return localDate;
        }

        if (value instanceof Date sqlDate) {
            return sqlDate.toLocalDate();
        }

        return null;
    }

    private Long toLong(String value) {

        if (!StringUtils.hasText(value)) {
            return null;
        }

        try {
            return Long.parseLong(value.trim());
        } catch (Exception ex) {
            return null;
        }
    }

    private Double toDouble(Double value) {
        return value;
    }

    private Double toDouble(Object value) {

        if (value == null) {
            return null;
        }

        if (value instanceof Number number) {
            return number.doubleValue();
        }

        return null;
    }

}
