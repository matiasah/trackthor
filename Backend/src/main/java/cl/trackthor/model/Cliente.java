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
@Table(name = "trs_cliente")
public class Cliente implements Serializable {

	@Column(name = "id", nullable = false, length = 11)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "cli_nombres", nullable = false)
	private String nombres;

	@Column(name = "cli_rut", nullable = false)
	private String rut;

	@Column(name = "cli_telefono", nullable = false)
	private String telefono;

	@Column(name = "cli_create_at", nullable = false)
	private java.time.LocalDateTime createdAt;

	// TODO
	@OneToMany()
	private List<Arriendo> arriendos;

	public Cliente() {
		super();
	}

	public Cliente(long id, String nombres, String rut, String telefono, LocalDateTime createdAt,
			List<Arriendo> arriendos) {
		super();
		this.id = id;
		this.nombres = nombres;
		this.rut = rut;
		this.telefono = telefono;
		this.createdAt = createdAt;
		this.arriendos = arriendos;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getRut() {
		return rut;
	}

	public void setRut(String rut) {
		this.rut = rut;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public java.time.LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(java.time.LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public List<Arriendo> getArriendos() {
		return arriendos;
	}

	public void setArriendos(List<Arriendo> arriendos) {
		this.arriendos = arriendos;
	}

	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nombres=" + nombres + ", rut=" + rut + ", telefono=" + telefono + ", createdAt="
				+ createdAt + ", arriendos=" + arriendos + "]";
	}

}
