package com.leads.sandbox.config;

import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.module.SimpleModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration(proxyBeanMethods = false)
public class JacksonConfig {

    @Bean
    public Module lenientLocalDateModule() {
        SimpleModule module = new SimpleModule();
        module.addDeserializer(LocalDate.class, new LenientLocalDateDeserializer());
        return module;
    }
}

