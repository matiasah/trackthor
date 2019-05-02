package cl.trackthor.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "trs_usuario_chofer")
public class UsuarioChofer implements Serializable {

	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "usc_rut", nullable = false)
	private String rut;

	@Column(name = "usc_create_at", nullable = false)
	private java.time.LocalDateTime createdAt;

	// TODO
	@OneToMany(mappedBy = "uchofer")
	private List<Alerta> alertas;

	@OneToMany(mappedBy = "uchofer")
	private List<HoraTrabajada> horasTrabajadas;

	public UsuarioChofer() {
		super();
	}

	public UsuarioChofer(long id, String rut, LocalDateTime createdAt, List<Alerta> alertas,
			List<HoraTrabajada> horasTrabajadas) {
		super();
		this.id = id;
		this.rut = rut;
		this.createdAt = createdAt;
		this.alertas = alertas;
		this.horasTrabajadas = horasTrabajadas;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRut() {
		return rut;
	}

	public void setRut(String rut) {
		this.rut = rut;
	}

	public java.time.LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(java.time.LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public List<Alerta> getAlertas() {
		return alertas;
	}

	public void setAlertas(List<Alerta> alertas) {
		this.alertas = alertas;
	}

	public List<HoraTrabajada> getHorasTrabajadas() {
		return horasTrabajadas;
	}

	public void setHorasTrabajadas(List<HoraTrabajada> horasTrabajadas) {
		this.horasTrabajadas = horasTrabajadas;
	}

	@Override
	public String toString() {
		return "UsuarioChofer [id=" + id + ", rut=" + rut + ", createdAt=" + createdAt + ", alertas=" + alertas
				+ ", horasTrabajadas=" + horasTrabajadas + "]";
	}

}
