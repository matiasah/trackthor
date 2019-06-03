package cl.trackthor.model;

import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@Table(name = "trs_adm_sistema")
public class AdministradorSistema extends Usuario {

    private static final long serialVersionUID = 462703325276923836L;

    public AdministradorSistema() {
        super();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority("USER_ADMIN_SISTEMA"));
    }

}
