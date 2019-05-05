package cl.trackthor.model;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "trs_adm_sistema")
public class AdministradorSistema extends Usuario {

	public AdministradorSistema() {
		super();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		return this.getAuthorities();
	}

	@Override
	public String getUsername() {

		return this.getNombre();
	}

	@Override
	public boolean isAccountNonExpired() {

		return true;
	}

	@Override
	public boolean isAccountNonLocked() {

		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {

		return true;
	}

	@Override
	public boolean isEnabled() {

		return true;
	}

}