package com.leads.sandbox.address;

import com.leads.sandbox.address.query.RetrieveLookup;
import com.leads.sandbox.address.repository.AddressType;
import com.leads.sandbox.address.repository.AddressTypeRepository;
import com.leads.sandbox.address.repository.CountryName;
import com.leads.sandbox.address.repository.CountryNameRepository;
import com.leads.sandbox.address.repository.DistrictName;
import com.leads.sandbox.address.repository.DistrictNameRepository;
import com.leads.sandbox.address.repository.DivisionName;
import com.leads.sandbox.address.repository.DivisionNameRepository;
import com.leads.sandbox.address.repository.ThanaName;
import com.leads.sandbox.address.repository.ThanaNameRepository;
import com.leads.sandbox.address.service.LookupService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;
import java.util.function.Function;

@Service
@Transactional(readOnly = true)
public class AddressServiceImpl implements LookupService {

    private final CountryNameRepository countryRepository;
    private final DivisionNameRepository divisionRepository;
    private final DistrictNameRepository districtRepository;
    private final ThanaNameRepository thanaRepository;
    private final AddressTypeRepository addressTypeRepository;

    public AddressServiceImpl(
            CountryNameRepository countryRepository,
            DivisionNameRepository divisionRepository,
            DistrictNameRepository districtRepository,
            ThanaNameRepository thanaRepository,
            AddressTypeRepository addressTypeRepository
    ) {
        this.countryRepository = countryRepository;
        this.divisionRepository = divisionRepository;
        this.districtRepository = districtRepository;
        this.thanaRepository = thanaRepository;
        this.addressTypeRepository = addressTypeRepository;
    }

    @Override
    public List<RetrieveLookup> getCountries() {
        return toLookupList(
                countryRepository.findAll(),
                CountryName::getId,
                CountryName::getCountryName
        );
    }

    @Override
    public List<RetrieveLookup> getDivisions(Long countryId) {
        return toLookupList(
                divisionRepository.findByCountryId(countryId),
                DivisionName::getId,
                DivisionName::getDivision
        );
    }

    @Override
    public List<RetrieveLookup> getDistricts(Long divisionId) {
        return toLookupList(
                districtRepository.findByDivisionId(divisionId),
                DistrictName::getId,
                DistrictName::getDistrictName
        );
    }

    @Override
    public List<RetrieveLookup> getThanas(Long districtId) {
        return toLookupList(
                thanaRepository.findByDistrictId(districtId),
                ThanaName::getId,
                ThanaName::getThanaName
        );
    }

    @Override
    public List<RetrieveLookup> getAddressTypes() {
        return toLookupList(
                addressTypeRepository.findAll(),
                AddressType::getId,
                AddressType::getType
        );
    }

    private <T> List<RetrieveLookup>
    toLookupList(
            Collection<T> entities,
            Function<T, Long> idExtractor,
            Function<T, String> labelExtractor
    ) {
        return entities.stream()
                .map(entity -> new RetrieveLookup(
                        idExtractor.apply(entity),
                        labelExtractor.apply(entity)
                ))
                .toList();
    }
}