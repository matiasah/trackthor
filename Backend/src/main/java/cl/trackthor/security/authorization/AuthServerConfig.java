package cl.trackthor.security.authorization;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.AccessTokenConverter;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.security.oauth2.provider.token.TokenStore;

/**
 * Genera token para inicio de sesion
 *
 * @author matia
 */
@Configuration
@EnableAuthorizationServer
public class AuthServerConfig extends AuthorizationServerConfigurerAdapter {

    @Value("${security.oauth2.resource.id}")
    private String resourceId;
    
    @Value("${security.oauth2.access_token.validity_period}")
    private int accessTokenValiditySeconds;
    
    @Value("${security.oauth2.refresh_token.validity_period}")
    private int refreshTokenValiditySeconds;

    private static final String CLIENT_ID = "android-client";
    private static final String CLIENT_SECRET = "android-secret";
    private static final String GRANT_TYPE_PASSWORD = "password";
    private static final String AUTHORIZATION_CODE = "authorization_code";
    private static final String REFRESH_TOKEN = "refresh_token";
    private static final String IMPLICIT = "implicit";
    private static final String SCOPE_READ = "read";
    private static final String SCOPE_WRITE = "write";
    private static final String TRUST = "trust";
    

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenStore tokenStore;
    
    @Autowired
    private AccessTokenConverter accessTokenConverter;
    
    @Autowired
    private TokenEnhancer tokenEnhancer;

    @Autowired
    @Qualifier("oauthPasswordEncoder")
    private PasswordEncoder oauthPasswordEncoder;

    @Override
    public void configure(AuthorizationServerSecurityConfigurer configurer) {
        configurer
                .tokenKeyAccess("permitAll()")
                .checkTokenAccess("isAuthenticated()");
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer configurer) throws Exception {
        configurer
                .inMemory()
                .withClient(CLIENT_ID)
                .secret(this.oauthPasswordEncoder.encode(CLIENT_SECRET))
                .authorizedGrantTypes(GRANT_TYPE_PASSWORD, AUTHORIZATION_CODE, REFRESH_TOKEN, IMPLICIT)
                .scopes(SCOPE_READ, SCOPE_WRITE, TRUST)
                .resourceIds(this.resourceId)
                .accessTokenValiditySeconds(this.accessTokenValiditySeconds)
                .refreshTokenValiditySeconds(this.refreshTokenValiditySeconds);
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
        endpoints
                .tokenStore(this.tokenStore)
                .accessTokenConverter(this.accessTokenConverter)
                .tokenEnhancer(this.tokenEnhancer)
                .authenticationManager(this.authenticationManager);
    }

}
