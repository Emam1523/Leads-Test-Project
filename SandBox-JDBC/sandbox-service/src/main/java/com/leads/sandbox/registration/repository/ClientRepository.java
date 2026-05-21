package com.leads.sandbox.registration.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.Map;

@Repository
public class ClientRepository {

    private final JdbcTemplate jdbcTemplate;

    public ClientRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Map<String, Object> generateClientId(String clientName) {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_GENERATE_CLIENT_ID");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_NAME", clientName);

        return jdbcCall.execute(params);
    }


    public void saveClientDetails(
            String clientId,
            String fatherName,
            String motherName,
            Date dateOfBirth,
            String gender,
            String maritalStatus,
            String spouseName,
            Long nid
    ) {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_SAVE_CLIENT_DETAILS");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId)
                .addValue("P_CLIENT_FATHER_NAME", fatherName)
                .addValue("P_CLIENT_MOTHER_NAME", motherName)
                .addValue("P_CLIENT_DATE_OF_BIRTH", dateOfBirth)
                .addValue("P_CLIENT_GENDER", gender)
                .addValue("P_CLIENT_MARITAL_STATUS", maritalStatus)
                .addValue("P_CLIENT_SPOUSE_NAME", spouseName)
                .addValue("P_CLIENT_NID", nid);

        jdbcCall.execute(params);
    }

    public void saveClientAddress(
            String clientId,
            String addressTypeId,
            String countryId,
            String divisionId,
            String districtId,
            String thanaId,
            String city,
            String zip,
            String mobile,
            String email,
            String address
    ) {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_SAVE_ADDRESS_CONTACT");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId)
                .addValue("P_ADDRESS_TYPE_ID", addressTypeId)
                .addValue("P_COUNTRY_ID", countryId)
                .addValue("P_DIVISION_ID", divisionId)
                .addValue("P_DISTRICT_ID", districtId)
                .addValue("P_THANA_ID", thanaId)
                .addValue("P_CITY", city)
                .addValue("P_ZIP", zip)
                .addValue("P_MOBILE", mobile)
                .addValue("P_EMAIL", email)
                .addValue("P_ADDRESS", address);

        jdbcCall.execute(params);
    }

    public void saveClientAccount(
            String clientId,
            String officeCode,
            String accountNo,
            String accountTitle,
            Date openDate,
            Date expiryDate,
            Double limitAmount
    ) {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_SAVE_ACCOUNT");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId)
                .addValue("P_OFFICE_CODE", officeCode)
                .addValue("P_ACCOUNT_NO", accountNo)
                .addValue("P_ACCOUNT_TITLE", accountTitle)
                .addValue("P_ACCOUNT_OPEN_DATE", openDate)
                .addValue("P_ACCOUNT_EXPIRY_DATE", expiryDate)
                .addValue("P_LIMIT_AMOUNT", limitAmount);

        jdbcCall.execute(params);
    }

    public Map<String, Object> getAllClients() {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_GET_ALL_CLIENTS");

        return jdbcCall.execute();
    }

    public Map<String, Object> getClientById(String clientId) {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_GET_CLIENT_BY_ID");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId);

        return jdbcCall.execute(params);
    }

    public Map<String, Object> getClientDetails(String clientId) {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_GET_CLIENT_DETAILS");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId);

        return jdbcCall.execute(params);
    }

    public Map<String, Object> getClientAddress(String clientId) {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_GET_CLIENT_ADDRESS");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId);

        return jdbcCall.execute(params);
    }

    public Map<String, Object> getClientAccount(String clientId) {

        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_GET_CLIENT_ACCOUNT");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId);

        return jdbcCall.execute(params);
    }

    public void updateClientInfo(String clientId, String clientName) {
        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_UPDATE_CLIENT_INFO");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId)
                .addValue("P_CLIENT_NAME", clientName);

        jdbcCall.execute(params);
    }


    public void updateClientDetails(
            String clientId,
            String fatherName,
            String motherName,
            Date dob,
            String gender,
            String maritalStatus,
            String spouseName,
            Long nid
    ) {
        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_UPDATE_CLIENT_DETAILS");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId)
                .addValue("P_CLIENT_FATHER_NAME", fatherName)
                .addValue("P_CLIENT_MOTHER_NAME", motherName)
                .addValue("P_CLIENT_DATE_OF_BIRTH", dob)
                .addValue("P_CLIENT_GENDER", gender)
                .addValue("P_CLIENT_MARITAL_STATUS", maritalStatus)
                .addValue("P_CLIENT_SPOUSE_NAME", spouseName)
                .addValue("P_CLIENT_NID", nid);

        jdbcCall.execute(params);
    }

    public void updateClientAddress(
            String clientId,
            String addressTypeId,
            String countryId,
            String divisionId,
            String districtId,
            String thanaId,
            String city,
            String zip,
            String mobile,
            String email,
            String address
    ) {
        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_UPDATE_ADDRESS_CONTACT");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId)
                .addValue("P_ADDRESS_TYPE_ID", addressTypeId)
                .addValue("P_COUNTRY_ID", countryId)
                .addValue("P_DIVISION_ID", divisionId)
                .addValue("P_DISTRICT_ID", districtId)
                .addValue("P_THANA_ID", thanaId)
                .addValue("P_CITY", city)
                .addValue("P_ZIP", zip)
                .addValue("P_MOBILE", mobile)
                .addValue("P_EMAIL", email)
                .addValue("P_ADDRESS", address);

        jdbcCall.execute(params);
    }

    public void updateClientAccount(
            String clientId,
            String officeCode,
            String accountNo,
            String accountTitle,
            Date openDate,
            Date expiryDate,
            Double limitAmount
    ) {
        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_UPDATE_ACCOUNT");

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId)
                .addValue("P_OFFICE_CODE", officeCode)
                .addValue("P_ACCOUNT_NO", accountNo)
                .addValue("P_ACCOUNT_TITLE", accountTitle)
                .addValue("P_ACCOUNT_OPEN_DATE", openDate)
                .addValue("P_ACCOUNT_EXPIRY_DATE", expiryDate)
                .addValue("P_LIMIT_AMOUNT", limitAmount);

        jdbcCall.execute(params);
    }


    public void deleteClient(String clientId) {
        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_DELETE_CLIENT");

        jdbcCall.execute(new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId));
    }

    public void deleteClientAddress(String clientId) {
        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_DELETE_CLIENT_ADDRESS");

        jdbcCall.execute(new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId));
    }

    public void deleteClientAccount(String clientId) {
        SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withCatalogName("PKG_MERG_CLIENT_EMAM")
                .withProcedureName("SP_DELETE_CLIENT_ACCOUNT");

        jdbcCall.execute(new MapSqlParameterSource()
                .addValue("P_CLIENT_ID", clientId));
    }

}
