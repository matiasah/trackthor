/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.trackthor.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.provider.token.DefaultAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.DefaultUserAuthenticationConverter;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.UserAuthenticationConverter;
//import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

/**
 * TokenStore
 * 
 * @author matia
 */
@Configuration
public class TokenConfig {
    
    @Value("${security.jwt.secret}")
    private String SECRET;
    
    @Bean
    public JwtAccessTokenConverter accessTokenConverter(UserAuthenticationConverter userAuthenticationConverter) {
        // Crear access token converter con UserAuthenticationConverter
        DefaultAccessTokenConverter defaultAccessTokenConverter = new DefaultAccessTokenConverter();
        defaultAccessTokenConverter.setUserTokenConverter(userAuthenticationConverter);
        
        // Access token converter
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setSigningKey(SECRET);
        converter.setAccessTokenConverter(defaultAccessTokenConverter);
        
        return converter;
    }
    
    @Bean
    public TokenStore tokenStore(JwtAccessTokenConverter converter) {
        // Jwt token store
        JwtTokenStore tokenStore = new JwtTokenStore(converter);
        
        return tokenStore;
    }
    
    @Bean
    public UserAuthenticationConverter userAuthenticationConverter(UserDetailsService userDetailsService) {
        DefaultUserAuthenticationConverter userAuthenticationConverter = new DefaultUserAuthenticationConverter();
        userAuthenticationConverter.setUserDetailsService(userDetailsService);
        
        return userAuthenticationConverter;
    }
    
    /*
    @Bean
    public TokenStore tokenStore() {
        return new InMemoryTokenStore();
    }
    */
    
    @Bean
    public DefaultTokenServices tokenServices(TokenStore tokenStore) {
        DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
        defaultTokenServices.setTokenStore(tokenStore);
        defaultTokenServices.setSupportRefreshToken(true);
        return defaultTokenServices;
    }
    
}
