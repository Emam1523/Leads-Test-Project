package com.leads.sandbox.address;

import com.leads.sandbox.address.query.RetrieveLookup;
import com.leads.sandbox.address.repository.AddressRepository;
import com.leads.sandbox.address.service.LookupService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
@Transactional(readOnly = true)
public class AddressServiceImpl implements LookupService {

    private final AddressRepository addressRepository;

    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public List<RetrieveLookup> getCountries() {
        return toLookupList(addressRepository.getCountries(),
                new String[]{"COUNTRY_ID", "ID"},
                new String[]{"COUNTRY_NAME", "COUNTRY", "NAME"});
    }

    @Override
    public List<RetrieveLookup> getDivisions(String countryId) {
        return toLookupList(addressRepository.getDivisions(countryId),
                new String[]{"DIVISION_ID", "ID"},
                new String[]{"DIVISION", "DIVISION_NAME", "NAME"});
    }

    @Override
    public List<RetrieveLookup> getDistricts(String divisionId) {
        return toLookupList(addressRepository.getDistricts(divisionId),
                new String[]{"DISTRICT_ID", "ID"},
                new String[]{"DISTRICT_NAME", "DISTRICT", "NAME"});
    }

    @Override
    public List<RetrieveLookup> getThanas(String districtId) {
        return toLookupList(addressRepository.getThanas(districtId),
                new String[]{"THANA_ID", "ID"},
                new String[]{"THANA_NAME", "THANA", "NAME"});
    }

    @Override
    public List<RetrieveLookup> getAddressTypes() {
        return toLookupList(addressRepository.getAddressTypes(),
                new String[]{"ADDRESS_TYPE_ID", "ID"},
                new String[]{"ADDRESS_TYPE", "TYPE", "NAME"});
    }

    private List<RetrieveLookup> toLookupList(Map<String, Object> result, String[] idKeys, String[] labelKeys) {
        return extractRows(result).stream()
                .map(row -> toLookup(row, idKeys, labelKeys))
                .toList();
    }

    private RetrieveLookup toLookup(Map<String, Object> row, String[] idKeys, String[] labelKeys) {
        Long id = toLong(getValue(row, idKeys));
        String label = getString(row, labelKeys);

        if (label == null) {
            label = firstStringValue(row);
        }

        if (id == null) {
            id = toLong(firstNumberValue(row));
        }

        return new RetrieveLookup(id, label);
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

    private String firstStringValue(Map<String, Object> row) {
        if (row == null) {
            return null;
        }
        for (Object value : row.values()) {
            if (value instanceof String text && StringUtils.hasText(text)) {
                return text;
            }
        }
        return null;
    }

    private Object firstNumberValue(Map<String, Object> row) {
        if (row == null) {
            return null;
        }
        for (Object value : row.values()) {
            if (value instanceof Number) {
                return value;
            }
        }
        return null;
    }

    private Long toLong(Object value) {
        if (value == null) {
            return null;
        }
        if (value instanceof Number number) {
            return number.longValue();
        }
        if (value instanceof String text && StringUtils.hasText(text)) {
            try {
                return Long.parseLong(text.trim());
            } catch (NumberFormatException ignored) {
                return null;
            }
        }
        return null;
    }
}