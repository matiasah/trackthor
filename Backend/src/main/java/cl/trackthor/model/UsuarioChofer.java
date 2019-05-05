package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "trs_usuario_chofer")
public class UsuarioChofer extends Usuario {

	@Column(name = "usc_rut", nullable = false)
	private String rut;

	// TODO
	@OneToMany(mappedBy = "uchofer")
	private List<Alerta> alertas;

	@OneToMany(mappedBy = "uchofer")
	private List<HoraTrabajada> horasTrabajadas;

	public UsuarioChofer() {
		super();
	}

	public UsuarioChofer(String rut, List<Alerta> alertas, List<HoraTrabajada> horasTrabajadas) {
		super();
		this.rut = rut;
		this.alertas = alertas;
		this.horasTrabajadas = horasTrabajadas;
	}

	@Override
	public String toString() {
		return "UsuarioChofer [rut=" + rut + ", alertas=" + alertas + ", horasTrabajadas=" + horasTrabajadas + "]";
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