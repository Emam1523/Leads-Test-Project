package com.leads.sandbox.register.service;

import com.leads.sandbox.register.query.RetrieveClient;
import com.leads.sandbox.register.query.RetrieveClientAccount;
import com.leads.sandbox.register.query.RetriveClientAddress;

import java.util.List;

public interface ClientQueryService {

    RetrieveClient retrieveClientById(String clientId);

    List<RetrieveClient> retrieveAllClients();

    RetrieveClientAccount getClientAccount(String clientId);

    RetriveClientAddress getClientAddress(String clientId);
}
