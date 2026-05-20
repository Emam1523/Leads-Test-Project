package com.leads.sandbox.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;


@EnableWebSecurity
@Configuration(proxyBeanMethods = false)
@ConditionalOnProperty(name = "security.enabled", havingValue = "true", matchIfMissing = true)
public class ResourceServerConfig {
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
            .cors(Customizer.withDefaults())
            .authorizeHttpRequests(auth -> auth
                    // Allow swagger and preflight OPTIONS without authentication
                    .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                    .requestMatchers("/v3/**", "/swagger-ui/**").permitAll()
                    .anyRequest().authenticated()
            )
            .csrf(AbstractHttpConfigurer::disable)
            .oauth2ResourceServer(oauth2 -> oauth2
                    .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()))
            );
    return http.build();
  }

  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();
    // Allow the frontend origin(s) used in development. You can replace with a property.
    config.setAllowedOrigins(java.util.List.of("http://localhost:4001", "http://localhost:4200", "http://localhost:3000", "*"));
    config.setAllowedMethods(java.util.List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    config.setAllowedHeaders(java.util.List.of("*"));
    config.setAllowCredentials(false);
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return source;
  }

  private JwtAuthenticationConverter jwtAuthenticationConverter() {
    JwtAuthenticationConverter converter = new JwtAuthenticationConverter();

    converter.setJwtGrantedAuthoritiesConverter(
            jwt -> {
              List<String> userRoleAuthorities = jwt.getClaimAsStringList("authorities");

              if (userRoleAuthorities == null) {
                userRoleAuthorities = Collections.emptyList();
              }

              JwtGrantedAuthoritiesConverter scopesConverter = new JwtGrantedAuthoritiesConverter();

              Collection<GrantedAuthority> scopeAuthorities = scopesConverter.convert(jwt);
              List<GrantedAuthority> authorities = new ArrayList<>();
              if (scopeAuthorities != null) {
                authorities.addAll(scopeAuthorities);
              }

              authorities.addAll(userRoleAuthorities.stream()
                      .map(SimpleGrantedAuthority::new)
                      .toList());
              return authorities;
            }
    );
    return converter;
  }

}
