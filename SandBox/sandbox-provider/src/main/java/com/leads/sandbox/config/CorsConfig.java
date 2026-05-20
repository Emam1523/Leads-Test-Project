package com.leads.sandbox.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ConditionalOnProperty(name = "cors.enabled", havingValue = "true")
public class CorsConfig implements WebMvcConfigurer {
  @Value("${cors.allowed-origins:*}")
  private String[] allowedOrigins;

  @Value("${cors.allowed-methods:GET,POST,PUT,DELETE,OPTIONS}")
  private String[] allowedMethods;

  @Value("${cors.allowed-headers:*}")
  private String[] allowedHeaders;

  @Value("${cors.allow-credentials:false}")
  private boolean allowCredentials;

  @Override
  public void addCorsMappings(CorsRegistry registry) {

    registry.addMapping("/**")
            .allowedOrigins(allowedOrigins)
            .allowedMethods(allowedMethods)
            .allowedHeaders(allowedHeaders)
            .allowCredentials(allowCredentials);
  }
}
