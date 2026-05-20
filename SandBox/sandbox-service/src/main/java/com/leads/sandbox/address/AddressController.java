package com.leads.sandbox.address;

import com.leads.sandbox.address.query.RetrieveLookup;
import com.leads.sandbox.address.repository.CountryName;
import com.leads.sandbox.address.repository.CountryNameRepository;
import com.leads.sandbox.address.repository.DistrictName;
import com.leads.sandbox.address.repository.DistrictNameRepository;
import com.leads.sandbox.address.repository.DivisionName;
import com.leads.sandbox.address.repository.DivisionNameRepository;
import com.leads.sandbox.address.service.LookupService;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/lookup")
public class AddressController {

    private final LookupService service;
    private final CountryNameRepository countryRepository;
    private final DivisionNameRepository divisionRepository;
    private final DistrictNameRepository districtRepository;

    public AddressController(LookupService service,
                             CountryNameRepository countryRepository,
                             DivisionNameRepository divisionRepository,
                             DistrictNameRepository districtRepository) {
        this.service = service;
        this.countryRepository = countryRepository;
        this.divisionRepository = divisionRepository;
        this.districtRepository = districtRepository;
    }

    @GetMapping("/address-types")
    public List<RetrieveLookup> addressTypes() {
        return service.getAddressTypes();
    }

    @GetMapping("/countries")
    public List<RetrieveLookup> countries(@RequestParam(name = "addressTypeId", required = false) String addressTypeId) {
        return service.getCountries();
    }

    @GetMapping("/divisions")
    public List<RetrieveLookup> divisions(@RequestParam(name = "countryId") String countryIdOrName) {
        Long countryId = resolveCountryId(countryIdOrName);
        return service.getDivisions(countryId);
    }

    @GetMapping("/districts")
    public List<RetrieveLookup> districts(@RequestParam(name = "divisionId") String divisionIdOrName) {
        Long divisionId = resolveDivisionId(divisionIdOrName);
        return service.getDistricts(divisionId);
    }

    @GetMapping("/thanas")
    public List<RetrieveLookup> thanas(@RequestParam(name = "districtId") String districtIdOrName) {
        Long districtId = resolveDistrictId(districtIdOrName);
        return service.getThanas(districtId);
    }

    private Long resolveCountryId(String input) {
        if (!StringUtils.hasText(input)) return null;
        try {
            return Long.valueOf(input);
        } catch (NumberFormatException ignore) {
            return countryRepository.findAll().stream()
                    .filter(c -> input.equalsIgnoreCase(c.getCountryName()))
                    .map(CountryName::getId)
                    .findFirst()
                    .orElse(null);
        }
    }

    private Long resolveDivisionId(String input) {
        if (!StringUtils.hasText(input)) return null;
        try {
            return Long.valueOf(input);
        } catch (NumberFormatException ignore) {
            return divisionRepository.findAll().stream()
                    .filter(d -> input.equalsIgnoreCase(d.getDivision()))
                    .map(DivisionName::getId)
                    .findFirst()
                    .orElse(null);
        }
    }

    private Long resolveDistrictId(String input) {
        if (!StringUtils.hasText(input)) return null;
        try {
            return Long.valueOf(input);
        } catch (NumberFormatException ignore) {
            return districtRepository.findAll().stream()
                    .filter(d -> input.equalsIgnoreCase(d.getDistrictName()))
                    .map(DistrictName::getId)
                    .findFirst()
                    .orElse(null);
        }
    }
}