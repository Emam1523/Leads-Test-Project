package com.leads.sandbox.register.service;

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

public interface ClientCommandService {

    RetrieveClientId process(GenerateClientId request);

    RetrieveClientId process(RegisterClient request);

    RetrieveClientUpdate updateClient(String clientId, UpdateClientInfo request);

    DeleteClient deleteClient(String clientId);

    RetrieveClientAddress updateClientAddress(String clientId, UpdateClientAddress request);


    RetrieveClientAccount updateClientAccount(String clientId, UpdateClientAccount request);

    DeleteAddress deleteAddress(String clientId);

    DeleteAccount deleteAccount(String clientId);
}
