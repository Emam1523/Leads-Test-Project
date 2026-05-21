package com.leads.sandbox.address.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public class AddressRepository {

    private final JdbcTemplate jdbcTemplate;

    public AddressRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Map<String, Object> getAddressTypes() {

        SimpleJdbcCall jdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                        .withCatalogName("PKG_MERG_CLIENT_EMAM")
                        .withProcedureName("SP_GET_ADDRESS_TYPES");

        return jdbcCall.execute();
    }

    public Map<String, Object> getCountries() {

        SimpleJdbcCall jdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                        .withCatalogName("PKG_MERG_CLIENT_EMAM")
                        .withProcedureName("SP_GET_COUNTRIES");

        return jdbcCall.execute();
    }

    public Map<String, Object> getDivisions(String countryId) {

        SimpleJdbcCall jdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                        .withCatalogName("PKG_MERG_CLIENT_EMAM")
                        .withProcedureName("SP_GET_DIVISIONS");

        MapSqlParameterSource parameterSource =
                new MapSqlParameterSource()
                        .addValue("P_COUNTRY_ID", countryId);

        return jdbcCall.execute(parameterSource);
    }

    public Map<String, Object> getDistricts(String divisionId) {

        SimpleJdbcCall jdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                        .withCatalogName("PKG_MERG_CLIENT_EMAM")
                        .withProcedureName("SP_GET_DISTRICTS");

        MapSqlParameterSource parameterSource =
                new MapSqlParameterSource()
                        .addValue("P_DIVISIONS_ID", divisionId);

        return jdbcCall.execute(parameterSource);
    }

    public Map<String, Object> getThanas(String districtId) {

        SimpleJdbcCall jdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                        .withCatalogName("PKG_MERG_CLIENT_EMAM")
                        .withProcedureName("SP_GET_THANAS");

        MapSqlParameterSource parameterSource =
                new MapSqlParameterSource()
                        .addValue("P_DISTRICTS_ID", districtId);

        return jdbcCall.execute(parameterSource);
    }
}