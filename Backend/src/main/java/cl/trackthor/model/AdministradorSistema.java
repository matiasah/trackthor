package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "trs_adm_sistema")
public class AdministradorSistema implements Serializable {
	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "ads_nombre", nullable = false)
	private String nombre;

	@Column(name = "ads_passwd", nullable = false)
	private String password;

	@Column(name = "ads_create_at", nullable = false)
	private java.time.LocalDateTime createdAt;

	public AdministradorSistema() {
		super();
	}

	public AdministradorSistema(long id, String nombre, String password, LocalDateTime createdAt) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.password = password;
		this.createdAt = createdAt;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public java.time.LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(java.time.LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	@Override
	public String toString() {
		return "AdministradorSistema [id=" + id + ", nombre=" + nombre + ", password=" + password + ", createdAt="
				+ createdAt + "]";
	}

}
