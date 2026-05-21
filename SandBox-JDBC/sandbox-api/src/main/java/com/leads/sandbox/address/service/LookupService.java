package com.leads.sandbox.address.service;

import com.leads.sandbox.address.query.RetrieveLookup;

import java.util.List;

public interface LookupService {

    List<RetrieveLookup> getAddressTypes();

    List<RetrieveLookup> getCountries();

    List<RetrieveLookup> getDivisions(String countryId);

    List<RetrieveLookup> getDistricts(String divisionId);

    List<RetrieveLookup> getThanas(String districtId);
}
