package com.leads.sandbox.address;

import com.leads.sandbox.address.query.RetrieveLookup;
import com.leads.sandbox.address.service.LookupService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/lookup")
public class AddressController {

    private final LookupService lookupService;

    public AddressController(LookupService lookupService) {
        this.lookupService = lookupService;
    }

    @GetMapping("/address-types")
    public List<RetrieveLookup> addressTypes() {

        return lookupService.getAddressTypes();
    }

    @GetMapping("/countries")
    public List<RetrieveLookup> countries() {

        return lookupService.getCountries();
    }

    @GetMapping("/divisions")
    public List<RetrieveLookup> divisions(
            @RequestParam("countryId") String countryId
    ) {

        return lookupService.getDivisions(countryId);
    }

    @GetMapping("/districts")
    public List<RetrieveLookup> districts(
            @RequestParam("divisionId") String divisionId
    ) {

        return lookupService.getDistricts(divisionId);
    }

    @GetMapping("/thanas")
    public List<RetrieveLookup> thanas(
            @RequestParam("districtId") String districtId
    ) {

        return lookupService.getThanas(districtId);
    }
}